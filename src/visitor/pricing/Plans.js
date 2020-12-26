import React from "react";
import { Grid, Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const featuresHeight = 450;
const smFeaturesHeight = 430;

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
    header: {
        height: 540,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        backgroundSize: "200% 200%",
        animation: "$gradient 5s ease infinite",
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
        maxWidth: 1366,
        margin: "auto",
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
        padding: 8,
        margin: 0,
    },
    plan: {
        maxWidth: 320,
    },
    planCard: {
        padding: 16,
        marginLeft: 8,
        marginRight: 8,

        [theme.breakpoints.down("md")]: {
            marginTop: 32,
        },
    },
    planHeading: {
        display: "block",
        height: "15%",
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
        display: "block",
        color: "#5F6368",
        marginTop: 16,
        fontSize: 14,
    },
    features: {
        color: "#5F6368",
        textAlign: "center",
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    },
}));

const plans = [
    {
        title: "Free",
        target: "_self",
        href: "https://hubblesuite.com/register",
        subtitle: "For businesses that need simple online payments.",
        price: "Get Started",
        features: [
            "Account, Subscription, and Plan Management",
            "Mobile App",
            "Email Reminders",
            "1 API Key and Webhooks",
            "Single Currency",
            "1 Team",
            "5 Collaborators",
            "Hosted Payement Page",
            "Upto 50 Active Subscriptions",
            "Templates",
        ],
    },
    {
        title: "Starter",
        target: "_blank",
        href: "mailto:contact@hubblesuite.com",
        subtitle: "For small businesses that need an economic solution.",
        price: "Contact sales",
        includes: "Includes everything in Free",
        features: [
            "SMS and Whatsapp Reminders",
            "Basic Reports",
            "2 API Keys",
            "Online Support",
            "Mutiple Currencies",
            "5 Teams",
            "25 Collaborators",
            "500 Active Subscriptions",
            "Coupons",
            "Gift Cards",
        ],
    },
    {
        title: "Professional",
        target: "_blank",
        href: "mailto:contact@hubblesuite.com",
        subtitle: "For businesses that are growth oriented.",
        price: "Contact sales",
        includes: "Includes everything in Starter",
        features: [
            "Advanced Analytics",
            "Advanced Reports",
            "Automated Call Reminders",
            "10 API Keys",
            "10 Teams",
            "50 Collaborators",
            "5000 Active Subscriptions",
            "Fraud Management",
            "Dunning Management",
            "Audit Logs",
        ],
    },
    {
        title: "Enterprise",
        target: "_blank",
        href: "mailto:contact@hubblesuite.com",
        subtitle: "For businesses that need flexibility and scalability.",
        price: "Contact sales",
        includes: "Includes everything in Professional",
        features: [
            "Unlimited API Keys and Webhooks",
            "Unlimited Teams",
            "Unlimited Active Subscriptions",
            "Professional Services",
            "IP Whitelisting",
            "Detected Account Manager",
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
                                        href={data.href}
                                        target={data.target}
                                        style={{ textDecoration: "none" }}
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.planAction}
                                        >
                                            {data.price}
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
