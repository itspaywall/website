import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Image1 from "./images/1.svg";
import Image2 from "./images/2.svg";
import Image3 from "./images/3.svg";
import LandingCard from "./LandingCard";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
    },
    landingcard: {
        padding: 8,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
    },
}));

function CardsSection() {
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.container}>
            <Grid item={true} className={classes.landingcard} xs={12} md={3}>
                <LandingCard
                    title="Actionable Insights"
                    subtitle="Get better insights into your customers behavior through cohort analytics and AI powered predictions. You can test, learn, and iterate to improve your decisions and deliver results."
                    image={Image1}
                />
            </Grid>
            <Grid item={true} className={classes.landingcard} xs={12} md={3}>
                <LandingCard
                    title="Build, Scale, Innovate"
                    subtitle="Each business has different requirements, it could be the user traffic, or the business model, or anything else. With our REST APIs, you can easily integrate your in-house solutions with our platform. We take care of scaling the cloud for you."
                    image={Image2}
                />
            </Grid>
            <Grid item={true} className={classes.landingcard} xs={12} md={3}>
                <LandingCard
                    title="Mobile First"
                    subtitle="Not in front of your laptop? No worries, we got you covered! Get instant access to your data from our iOS and Android apps."
                    image={Image3}
                />
            </Grid>
        </Grid>
    );
}

export default CardsSection;
