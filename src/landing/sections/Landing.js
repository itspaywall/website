import React from "react";
import { makeStyles } from "@material-ui/core";
import LandingSection from "./LandingSection";
import CardsSection from "./CardsSection";
import FeaturesSection from "./FeaturesSection";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
    },
}));

function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LandingSection />
            <CardsSection />
            <FeaturesSection />
        </div>
    );
}

export default Landing;
