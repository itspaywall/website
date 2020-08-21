import React from "react";
import { Button, makeStyles, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        height: "100vh",
    },
    title: {
        [theme.breakpoints.up("xs")]: {
            fontSize: 40,
            margin: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 60,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: 60,
            margin: "auto",
        },
        padding: 16,
        color: "#5F6368",
    },
    subtitle: {
        [theme.breakpoints.up("xs")]: {
            fontSize: 20,
            margin: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 30,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: 30,
            margin: "auto",
        },
        padding: 16,
        color: "#5F6368",
    },
    button: {
        margin: 16,
        marginTop: 24,
        borderRadius: 0,
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
    media: {
        [theme.breakpoints.up("xs")]: {
            height: 360,
            width: 360,
            margin: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            height: 480,
            width: 480,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            height: 680,
            width: 680,
            margin: "auto",
        },
    },
    landingcard: {
        padding: 8,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
    },
}));

function Hero() {
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.container}>
            <Grid item={true} className={classes.item} xs={12} md={6}>
                <Typography className={classes.title}>
                    Hubble is an intuitive subscription management service.
                </Typography>
                <Typography className={classes.subtitle}>
                    Manage your subscriptions seamlessly. We are here to help
                    you move beyond spreadsheets and legacy tools.
                </Typography>
                <Button
                    className={classes.button}
                    size="large"
                    color="primary"
                    variant="contained"
                >
                    Try for Free
                </Button>
            </Grid>
            <Hidden smDown={true}>
                <Grid item={true} className={classes.item} xs={12} md={4}>
                    <CardMedia
                        className={classes.media}
                        image="assets/images/landing.svg"
                    />
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Hero;
