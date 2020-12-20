/*
 * Copyright 2017-2020 Samuel Rowe, Joel E. Rego
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { makeStyles } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import FAQsIcon from "@material-ui/icons/Help";
import PricingIcon from "@material-ui/icons/MonetizationOn";
import LoginIcon from "@material-ui/icons/AccountCircle";
import RegisterIcon from "@material-ui/icons/AddCircle";
import APIIcon from "@material-ui/icons/Code";
import GuidesIcon from "@material-ui/icons/Class";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    action: {
        width: "100%",
    },
});

const links = [
    {
        id: "login",
        title: "Login",
        url: "/login",
        icon: <LoginIcon />,
    },
    {
        id: "register",
        title: "Register",
        url: "/register",
        icon: <RegisterIcon />,
    },
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
    {
        id: "api",
        title: "API Reference",
        url: `${process.env.REACT_APP_DOCS_URL}/api`,
        icon: <APIIcon />,
        external: true,
    },
    {
        id: "guides",
        title: "Guides",
        url: `${process.env.REACT_APP_DOCS_URL}/guides`,
        icon: <GuidesIcon />,
        external: true,
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

    const handleExternalLink = (url) => () => {
        window.location = url;
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
                        onClick={
                            item.external
                                ? handleExternalLink(item.url)
                                : handleLink(item.url)
                        }
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
