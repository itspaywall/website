import React from "react";
import { Button, makeStyles, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Image from "./images/landing.svg";

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
            height: 300,
            width: 300,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            height: 500,
            width: 500,
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

function LandingSection() {
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.container}>
            <Grid item={true} className={classes.item} xs={12} md={7}>
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
            <Grid item={true} className={classes.item} xs={12} md={3}>
                <CardMedia className={classes.media} image={Image} />
            </Grid>
        </Grid>
    );
}

export default LandingSection;
