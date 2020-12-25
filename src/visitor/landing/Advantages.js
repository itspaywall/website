import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import InsightsIcon from "@material-ui/icons/DonutLarge";
import BuildIcon from "@material-ui/icons/Business";
import MobileIcon from "@material-ui/icons/MobileFriendly";

import Advantage from "./Advantage";

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
        height: 400,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        backgroundSize: "200% 200%",
        animation: "$gradient 5s ease infinite",
        color: theme.palette.primary.contrastText,
        display: "flex",
        [theme.breakpoints.down("md")]: {
            height: 500,
        },
    },
    headerContent: {
        padding: 24,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 80,
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        [theme.breakpoints.down("md")]: {
            fontSize: 32,
        },
    },
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 16,
        maxWidth: "50%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    card: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: -100,

        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    cardContent: {
        height: 300,
        [theme.breakpoints.down("sm")]: {
            height: 850,
        },
    },
    container: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
    },
}));

const list = [
    {
        title: "Actionable Insights",
        subtitle:
            "Get better insights into your customers behavior through cohort analytics.",
        icon: InsightsIcon,
    },
    {
        title: "Hosted Payment Pages",
        subtitle:
            "Accept payments online, without writing a single line of code. Your business can go online immediately.",
        icon: BuildIcon,
    },
    {
        title: "Mobile First",
        subtitle:
            "Not in front of your laptop? No worries, we got you covered! Get instant access to your data from our iOS and Android apps.",
        icon: MobileIcon,
    },
];

function Advantages() {
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
                        Manage your recurring payments seamlessly
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        className={classes.subtitle}
                    >
                        The primary goal of your subscription business is to
                        quickly enter the market. You shouldn't spend too much
                        time on managing your subscriptions. Paywall allows you
                        to easily integrate subscription lifecycle management in
                        less than five minutes!
                    </Typography>
                </div>
            </div>

            <Card className={classes.card} elevation={4}>
                <CardContent className={classes.cardContent}>
                    <Grid container={true} className={classes.container}>
                        {list.map((card) => (
                            <Grid item={true} xs={12} md={4}>
                                <Advantage
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    icon={card.icon}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default Advantages;
