import React, { useState } from "react";
import {
    Paper,
    Container,
    Icon,
    Input,
    Button,
    makeStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundImage: `url(${"assets/images/hero.jpg"})`,
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        scrollBehavior: "smooth",
    },
    title: {
        background:
            "linear-gradient(90deg, rgba(29,161,242,1) 0%, rgba(222,0,255,1) 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        textAlign: "center",
        fontWeight: 600,
        lineHeight: 1.3,
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: 32,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 52,
            maxWidth: "50%",
        },
    },
    subtitle: {
        marginTop: 32,
        width: "100%",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
            textAlign: "center",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 30,
            maxWidth: "50%",
        },
        color: "#5F6368",
    },
    button: {
        margin: 16,
        marginTop: 24,
        borderRadius: 0,
        paddingTop: 16,
        paddingBottom: 16,
        width: 200,
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    image: {
        margin: 0,
        padding: 24,
        paddingBottom: 0,
    },
    card: {
        margin: 24,
        maxWidth: 600,
        textAlign: "center",
    },
    screenshot: {
        marginTop: 120,
        marginLeft: -200,
        width: "40%",
    },
    media: {
        borderRadius: "0px 0px 8px 8px",
        [theme.breakpoints.up("xs")]: {
            height: "auto",
            width: 360,
            margin: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            height: "auto",
            width: "100%",
        },
        [theme.breakpoints.up("xl")]: {
            height: "auto",
            width: "100%",
        },
        boxShadow: `0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)`,
    },

    emailAddressPaper: {
        display: "flex",
        alignItems: "center",
        height: 48,
        width: "100%",
        marginTop: 40,
        borderRadius: 24,
        [theme.breakpoints.up("md")]: {
            maxWidth: 400,
        },
        paddingLeft: 16,
        paddingRight: 4,
        // borderStyle: "solid",
        // borderWidth: 2,
        // borderColor: theme.palette.primary.dark
    },
    searchIcon: {
        color: "white",
        marginRight: 8,
    },
    search: {
        color: "#000000",
        marginRight: 8,
    },

    subscribe: {
        borderRadius: 24,
        height: 40,
        width: 200,
        color: "white",
    },
    subscribeText: {},
}));

function Hero() {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push("/register");

    const [searchText, setSearchText] = useState("");
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div
            className={classes.main}
            style={{ backgroundImage: "assets/images/screenshot.png" }}
        >
            <Typography className={classes.title}>
                The fastest way to monetize your subscription service
            </Typography>
            <Typography className={classes.subtitle}>
                Paywall is the simplest subscription management platform for
                no-code app developers.
            </Typography>
            {/*<Button
                    className={classes.button}
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                >
                    TRY FOR FREE
                </Button>*/}

            <Paper className={classes.emailAddressPaper} elevation={1}>
                <Input
                    placeholder="Your email address"
                    className={classes.search}
                    disableUnderline={true}
                    fullWidth={true}
                    value={searchText}
                    variant="outlined"
                    onChange={handleSearch}
                />

                <Button
                    className={classes.subscribe}
                    variant="contained"
                    color="primary"
                    background="linear-gradient(to right bottom, #430089, #82ffa1)"
                >
                    <Icon className={classes.searchIcon}>mail</Icon>
                    <span id="subscribeText" className={classes.subscribeText}>
                        Subscribe
                    </span>
                </Button>
            </Paper>
        </div>
    );
}

export default Hero;
