import React from "react";
import Feature from "./Feature";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    card: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 128,

        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    cardContent: {
        padding: 32,
    },
    image: {
        width: "auto",
        height: 500,
        marginTop: 24,
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
        title: "Hosted Payment Pages",
        subtitle:
            "Accept payments online, without writing a single line of code. Your business can go online immediately.",
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
        <Card className={classes.card} elevation={4}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.title}>Features</Typography>
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
            </CardContent>
        </Card>
    );
}

export default Features;
