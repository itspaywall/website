import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Advantage from "./Advantage";

const useStyles = makeStyles((theme) => ({
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
            "Get better insights into your customers behavior through cohort analytics and AI powered predictions.",
        image: "assets/images/1.svg",
    },
    {
        title: "Build, Scale, Innovate",
        subtitle:
            "Each business has different requirements, it could be the user traffic, or the business model, or anything else.",
        image: "assets/images/2.svg",
    },
    {
        title: "Mobile First",
        subtitle:
            "Not in front of your laptop? No worries, we got you covered! Get instant access to your data from our iOS and Android apps.",
        image: "assets/images/3.svg",
    },
];

function Advantages() {
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.container}>
            {list.map((card) => (
                <Grid item={true} xs={12} md={3}>
                    <Advantage
                        title={card.title}
                        subtitle={card.subtitle}
                        image={card.image}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Advantages;
