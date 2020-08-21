import React from "react";
import Feature from "./Feature";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 0,
        paddingTop: 128,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        fontSize: 48,
        color: "#5F6368",
    },
}));

const list = [
    {
        title: "Billing Models",
        subtitle:
            "Charge your customers a fixed recurring charge per billing cycle, or based on the number of entities purchased, or even for only what they consume in a period.",
        cover: "assets/images/billing.svg",
    },
    {
        title: "Hosted Payment Pages",
        subtitle:
            "You can conveniently accept payments online, without writing a single line of code. Your business can go online immediately.",
        cover: "assets/images/hpp.svg",
    },
    {
        title: "Multiple Currencies",
        subtitle: "Offer your solutions to customers around the world.",
        cover: "assets/images/currency.svg",
    },
    {
        title: " Trial Period",
        subtitle:
            "Allow your customers to experience your plans for a trial period.",
        cover: "assets/images/trial.svg",
    },
    {
        title: "Setup Fee",
        subtitle:
            "Charge your customers a one time fee at the beginning of the subscription.",
        cover: "assets/images/setup.svg",
    },
    {
        title: "REST APIs",
        subtitle:
            "You can create custom solutions that create plans, send invoices, upgrade subscriptions, and much more using our REST APIs without hassle.",
        cover: "assets/images/api.svg",
    },
];

function Features() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.title}>Features</Typography>
            {list.map((feature, index) => (
                <Feature
                    title={feature.title}
                    subtitle={feature.subtitle}
                    cover={feature.cover}
                    alignment={index % 2}
                />
            ))}
        </div>
    );
}

export default Features;
