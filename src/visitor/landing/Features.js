import React from "react";
import Feature from "./Feature";
import { makeStyles } from "@material-ui/core";
import { Typography, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 128,
    },
    image: {
        width: "auto",
        height: 500,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    title: {
        margin: 0,
        fontSize: 40,
        textAlign: "center",
        color: "#5F6368",

        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
        },
    },
    feature: {
        padding: 32,

        [theme.breakpoints.down("sm")]: {
            padding: 0,
            paddingTop: 24,
        },
    },
}));

const list = [
    {
        title: "Billing Models",
        subtitle:
            "Charge your customers a fixed recurring charge, or based on the number of entities purchased or consumption.",
    },
    {
        title: "No Vendor Lock-In",
        subtitle:
            "If your business requirements grow beyond Paywall, you can tweak our source code to satisfy your needs.",
    },
    {
        title: "Multiple Currencies",
        subtitle: "Offer your solutions to customers around the world.",
    },
    {
        title: "Trial Period",
        subtitle:
            "Allow your customers to experience your plans for a trial period.",
    },
    {
        title: "Setup Fee",
        subtitle:
            "Charge your customers a one time fee at the beginning of the subscription.",
    },
    {
        title: "REST APIs",
        subtitle:
            "Implement custom solutions that create plans, send invoices, upgrade subscriptions, and much more using our REST APIs.",
    },
];

function Features() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Typography className={classes.title}>
                    Everything you need in one place
                </Typography>
                <Hidden smDown={true}>
                    <img
                        src="assets/images/features.svg"
                        className={classes.image}
                        alt="A friendly work environment"
                    />
                </Hidden>
                <Grid container={true}>
                    {list.map((feature, index) => (
                        <Grid
                            item={true}
                            xs={12}
                            md={4}
                            className={classes.feature}
                        >
                            <Feature
                                title={feature.title}
                                subtitle={feature.subtitle}
                                cover={feature.cover}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Features;
