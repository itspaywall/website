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
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "50%": {
            backgroundPosition: "100% 50%",
        },
        "100%": {
            backgroundPosition: "0% 50%",
        },
    },
    main: {
        backgroundSize: "400% 400%",
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 70%)",
        width: "60%",
        height: "100vh",
        animation: "$gradient 5s ease infinite",
        padding: 120,
    },
    title: {
        color: "#000000",
        fontWeight: 600,
        lineHeight: 1.3,
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: 32,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 52,
            color: "white",
            maxWidth: "85%",
        },
    },
    subtitle: {
        marginTop: 32,
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
            textAlign: "center",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 30,
            color: "white",
            maxWidth: "85%",
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
        color: theme.palette.primary.light,
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
        <div className={classes.container}>
            <div className={classes.main}>
                <Container>
                    <Typography className={classes.title}>
                        The fastest way to monetize your subscription service
                    </Typography>
                    <Typography className={classes.subtitle}>
                        Paywall is the simplest subscription management platform
                        for no-code app developers.
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
                            onChange={handleSearch}
                        />

                        <Button
                            className={classes.subscribe}
                            variant="contained"
                            color="primary"
                        >
                            <Icon className={classes.searchIcon}>mail</Icon>
                            <span
                                id="subscribeText"
                                className={classes.subscribeText}
                            >
                                Subscribe
                            </span>
                        </Button>
                    </Paper>
                </Container>
            </div>
            <div className={classes.screenshot}>
                <img
                    className={classes.media}
                    src="assets/images/screenshot.png"
                    alt="Screenshot"
                />
            </div>
        </div>
    );
}

export default Hero;
