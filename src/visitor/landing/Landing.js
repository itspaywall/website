import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Features from "./Features";
import CallToAction from "./CallToAction";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
    },
}));

function Landing() {
    const classes = useStyles();

    useEffect(() => {
        document.title = "Paywall";
    }, []);

    return (
        <div className={classes.container}>
            <Hero />
            <Advantages />
            <Features />
            <CallToAction />
        </div>
    );
}

export default Landing;
