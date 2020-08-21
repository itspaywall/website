import React from "react";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    logoButton: {
        height: 64,
        width: 160,
        borderRadius: 0,
    },
    appBar: {
        margin: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: theme.palette.primary,
        background: "white",
    },
    button: {
        padding: 16,
        borderRadius: 0,
    },
    action: {
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 16,
        borderRadius: 0,
    },
}));

const links = [
    {
        id: "pricing",
        title: "Pricing",
        url: "/pricing",
    },
    {
        id: "faqs",
        title: "FAQs",
        url: "/faqs",
    },
];

function MainToolbar(props) {
    const classes = useStyles();
    const { history } = props;
    const handleLink = (url) => () => history.push(url);

    return (
        <AppBar position="fixed" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" flexGrow={1}>
                    <Button
                        className={classes.logoButton}
                        onClick={handleLink("/index")}
                    >
                        <img
                            src="assets/images/hubble.png"
                            alt="Hubble logo"
                            height="40px"
                        />
                    </Button>
                    {links.map((item) => (
                        <Button
                            key={item.id}
                            onClick={handleLink(item.url)}
                            className={classes.button}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>
                <Button className={classes.action}>Log In</Button>
                <Button
                    className={classes.action}
                    color="primary"
                    variant="contained"
                >
                    Try for Free
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(MainToolbar);
