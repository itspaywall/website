import React from "react";
import Feature from "./Feature";
import { makeStyles } from "@material-ui/core";
import { Typography, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import BillingModelIcon from "@material-ui/icons/Receipt";
import PaymentIcon from "@material-ui/icons/Payment";
import NoVendorLockInIcon from "@material-ui/icons/NoEncryption";
import MultipleCurrenciesIcon from "@material-ui/icons/Euro";
import TrialPeriodIcon from "@material-ui/icons/HourglassEmpty";
import ActionableInsightsIcon from "@material-ui/icons/DonutLarge";
import MobileFirstIcon from "@material-ui/icons/PhoneAndroid";
import SetupFeeIcon from "@material-ui/icons/MonetizationOn";
import RestIcon from "@material-ui/icons/Http";

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
        padding: 8,
        paddingLeft: 32,
        paddingRight: 32,
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
        icon: BillingModelIcon,
    },
    {
        title: "Hosted Payments Page",
        subtitle:
            "Accept payments online, without writing a single line of code. Your business can go online immediately.",
        icon: PaymentIcon,
    },
    {
        title: "Multiple Currencies",
        subtitle: "Offer your solutions to customers around the world.",
        icon: MultipleCurrenciesIcon,
    },
    {
        title: "Trial Period",
        subtitle:
            "Allow your customers to experience your plans for a trial period.",
        icon: TrialPeriodIcon,
    },
    {
        title: "Setup Fee",
        subtitle:
            "Charge your customers a one time fee at the beginning of the subscription.",
        icon: SetupFeeIcon,
    },
    {
        title: "REST APIs",
        subtitle:
            "Implement custom solutions that create plans, send invoices, upgrade subscriptions, and much more using our REST APIs.",
        icon: RestIcon,
    },
    {
        title: "Actionable Insights",
        subtitle:
            "Get better insights into your customers behavior through cohort analytics.",
        icon: ActionableInsightsIcon,
    },
    {
        title: "Mobile First",
        subtitle:
            "Not in front of your laptop? No worries, we got you covered! Get instant access to your data from our iOS and Android apps.",
        icon: MobileFirstIcon,
    },
    {
        title: "No Vendor Lock-In",
        subtitle:
            "If your business requirements grow beyond Paywall, you can tweak our source code to satisfy your needs.",
        icon: NoVendorLockInIcon,
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
                                icon={feature.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Features;
