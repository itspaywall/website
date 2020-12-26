import React, { useState } from "react";
import {
    Container,
    Paper,
    Icon,
    Input,
    Button,
    makeStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../firebaseConfig";

const paywallFirebase = firebase.initializeApp(firebaseConfig);
const MailingList = paywallFirebase.firestore();

const useStyles = makeStyles((theme) => ({
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
    root: {
        backgroundImage: `url(${"assets/images/hero.jpg"})`,
    },
    main: {
        // backgroundAttachment: "fixed",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        scrollBehavior: "smooth",
    },
    title: {
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        backgroundSize: "200% 200%",
        animation: "$gradient 5s ease infinite",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        textAlign: "center",
        fontWeight: 800,
        lineHeight: 1.3,
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: 32,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 52,
            maxWidth: "60%",
        },
    },
    subtitle: {
        marginTop: 32,
        width: "100%",
        fontWeight: 500,
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
            textAlign: "center",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 30,
            maxWidth: "60%",
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

    const [emailAddress, setEmailAddress] = useState("");

    const handleEmailAddressChange = (event) => {
        setEmailAddress(event.target.value);
    };

    const handleEmailAddressSubmit = (event) => {
        if (emailAddress) {
            MailingList.collection("emails").add({
                email: emailAddress,
            });
        }
        setEmailAddress("");
    };

    return (
        <div className={classes.root}>
            <Container className={classes.main}>
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

                <Paper className={classes.emailAddressPaper} elevation={5}>
                    <Input
                        placeholder="Your email address"
                        className={classes.search}
                        disableUnderline={true}
                        fullWidth={true}
                        value={emailAddress}
                        variant="outlined"
                        onChange={handleEmailAddressChange}
                    />

                    <Button
                        className={classes.subscribe}
                        variant="contained"
                        color="primary"
                        onClick={handleEmailAddressSubmit}
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
    );
}

export default Hero;
