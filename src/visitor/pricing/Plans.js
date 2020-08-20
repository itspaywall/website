import React from "react";
import { Grid, Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const planHeight = 500;
const featuresHeight = 300;

const smPlanHeight = 600;
const smFeaturesHeight = 350;

const useStyles = makeStyles((theme) => ({
    header: {
        height: 540,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        color: theme.palette.primary.contrastText,
        display: "flex",
        [theme.breakpoints.down("md")]: {
            height: 640,
        },
    },
    headerContent: {
        padding: 24,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginTop: 128,
        marginBottom: 128,

        [theme.breakpoints.down("sm")]: {
            marginTop: 40,
        },
    },
    body: {
        color: "#5F6368",
        marginTop: -192,
    },
    cards: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    badge: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.getContrastText(theme.palette.error.main),
    },
    price: {
        backgroundColor: theme.palette.primary[900],
        color: theme.palette.contrastText,
    },
    title: {
        textAlign: "center",
        fontSize: 40,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 16,
    },
    planContainer: {
        padding: 32,
    },
    plan: {
        maxWidth: 320,
    },
    planCard: {
        padding: 16,
        height: planHeight,
        marginLeft: 8,
        marginRight: 8,

        [theme.breakpoints.down("md")]: {
            marginTop: 32,
            height: smPlanHeight,
        },
    },
    planHeading: {
        color: "#5F6368",
        textAlign: "center",
        marginTop: 16,
    },
    planTitle: {
        color: "#5F6368",
        fontSize: 24,
    },
    planSubtitle: {
        color: "#5F6368",
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8,
        display: "block",
        marginTop: 8,
    },
    includes: {
        color: "#5F6368",
        marginTop: 16,
        fontSize: 14,
    },
    features: {
        color: "#5F6368",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: featuresHeight,

        [theme.breakpoints.down("md")]: {
            height: smFeaturesHeight,
        },
    },
    feature: {
        color: "#5F6368",
        fontSize: 14,
        marginTop: 16,
    },
    check: {
        fontSize: 16,
        color: "green",
    },
    planAction: {
        width: "80%",
        marginTop: 16,
        marginBottom: 16,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    },
}));

const plans = [
    {
        title: "Starter",
        subtitle: "The plan for businesses that need simple online payments.",
        price: "Contact sales",
        features: [
            "Account, Subscription, and Plan Management",
            "Basic Analytics",
            "Basic Reports",
            "Multiple API Keys and Webhooks",
            "Online Support",
            "10 Teams",
        ],
    },
    {
        title: "Professional",
        subtitle: "The plan for businesses that are growth oriented.",
        price: "Contact sales",
        includes: "Includes everything in Starter",
        features: [
            "Advanced Analytics",
            "Advanced Reports",
            "Multiple Currencies",
            "Audit Logs",
            "25 Teams",
        ],
    },
    {
        title: "Enterprise",
        subtitle:
            "The plan for businesses that need flexibility and scalability.",
        price: "Contact sales",
        includes: "Includes everything in Professional",
        features: [
            "Professional Services",
            "Unlimited API Keys and Webhooks",
            "IP Whitelisting",
            "50 Teams",
            "Dedicated Account Manager",
        ],
    },
];

function Plans(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <Typography
                        variant="h2"
                        color="inherit"
                        className={classes.title}
                    >
                        Plans for businesses of all sizes
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        className={classes.subtitle}
                    >
                        The most advanced subscription management platform at
                        simple and affordable pricing.
                        <br />
                        You can always try for 21 days, free of cost!
                    </Typography>
                </div>
            </div>

            <div className={classes.body}>
                <div className={classes.cards}>
                    <Grid
                        container={true}
                        justify="center"
                        className={classes.planContainer}
                    >
                        {plans.map((data) => (
                            <Grid item={true} lg={3} xs={12}>
                                <Card
                                    raised={true}
                                    className={classes.planCard}
                                >
                                    <div className={classes.planHeading}>
                                        <Typography
                                            className={classes.planTitle}
                                        >
                                            {data.title}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            className={classes.planSubtitle}
                                        >
                                            {data.subtitle}
                                        </Typography>
                                    </div>

                                    <CardContent className={classes.features}>
                                        <Typography
                                            color="textSecondary"
                                            className={classes.includes}
                                        >
                                            {data.includes}
                                        </Typography>
                                        {data.features.map((feature, index) => (
                                            <Typography
                                                color="textPrimary"
                                                className={classes.feature}
                                            >
                                                {feature}
                                            </Typography>
                                        ))}
                                    </CardContent>

                                    <a
                                        href="mailto:samuelrowe1999@gmail.com"
                                        target="_blank"
                                        style={{ textDecoration: "none" }}
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.planAction}
                                        >
                                            Contact Sales
                                        </Button>
                                    </a>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Plans;
