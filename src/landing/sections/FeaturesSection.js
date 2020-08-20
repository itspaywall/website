import React from "react";
import { makeStyles, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Billing from "./images/billing.svg";
import HPP from "./images/hpp.svg";
import Currency from "./images/currency.svg";
import Trial from "./images/trial.svg";
import Setup from "./images/setup.svg";
import API from "./images/api.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        paddingTop: 64,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        height: "40vh",
    },
    item: {
        margin: 16,
    },
    title: {
        fontSize: 30,
        margin: "auto",
        color: "#5F6368",
    },
    subtitle: {
        fontSize: 16,
        margin: "auto",
        color: "#5F6368",
    },
    media: {
        [theme.breakpoints.up("xs")]: {
            height: 200,
            width: 200,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            height: 300,
            width: 300,
            margin: "auto",
        },
    },
}));

function FeaturesSection() {
    const classes = useStyles();
    return (
        <div>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>
                        Billing Models
                    </Typography>
                    <Typography className={classes.subtitle}>
                        Charge your customers a fixed recurring charge per
                        billing cycle, or based on the number of entities per
                        billing cycle, or even for only what they consume in a
                        billing cycle.
                    </Typography>
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <div className={classes.card}>
                        <CardMedia className={classes.media} image={Billing} />
                    </div>
                </Grid>
            </Grid>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <CardMedia className={classes.media} image={HPP} />
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>
                        Hosted Payment Pages
                    </Typography>
                    <Typography className={classes.subtitle}>
                        You can conveniently accept payments online, without
                        writing a single line of code. Your business can go
                        online immediately.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>
                        Multiple Currencies
                    </Typography>
                    <Typography className={classes.subtitle}>
                        Offer your solutions to customers around the world.
                    </Typography>
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <CardMedia className={classes.media} image={Currency} />
                </Grid>
            </Grid>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <CardMedia className={classes.media} image={Trial} />
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>
                        Trial Period
                    </Typography>
                    <Typography className={classes.subtitle}>
                        Allow your customers to experience your plans for a
                        trial period.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>Setup Fee</Typography>
                    <Typography className={classes.subtitle}>
                        Charge your customers a one time fee at the beginning of
                        the subscription.
                    </Typography>
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <CardMedia className={classes.media} image={Setup} />
                </Grid>
            </Grid>
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={2}>
                    <CardMedia className={classes.media} image={API} />
                </Grid>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>REST APIs</Typography>
                    <Typography className={classes.subtitle}>
                        You can create custom solutions that create plans, send
                        invoices, upgrade subscriptions, and much more using our
                        REST APIs without hassle.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default FeaturesSection;
