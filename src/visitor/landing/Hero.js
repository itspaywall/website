import React from "react";
import { Button, makeStyles, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router-dom";

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
        padding: 16,
        margin: 0,
        color: "#5F6368",
        lineHeight: 1.3,
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: 32,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 60,
        },
    },
    subtitle: {
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
            textAlign: "center",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 30,
        },
        padding: 16,
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
}));

function Hero() {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push("/register");

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
                    onClick={handleClick}
                >
                    TRY FOR FREE
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
