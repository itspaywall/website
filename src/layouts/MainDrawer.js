import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import FAQsIcon from "@material-ui/icons/Help";
import PricingIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});

const links = [
    {
        id: "pricing",
        title: "Pricing",
        url: "/pricing",
        icon: <PricingIcon />,
    },
    {
        id: "faqs",
        title: "FAQs",
        url: "/faqs",
        icon: <FAQsIcon />,
    },
];

export default function MainDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    const handleLink = (url) => () => {
        history.push(url);
        setOpen(false);
    };

    const list = (
        <div
            className={classes.list}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {links.map((item) => (
                    <ListItem
                        button
                        key={item.id}
                        onClick={handleLink(item.url)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton className={classes.button} onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list}
            </SwipeableDrawer>
        </div>
    );
}
