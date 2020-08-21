import React from "react";
import { makeStyles } from "@material-ui/core";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Features from "./Features";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
    },
}));

function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Hero />
            <Advantages />
            <Features />
        </div>
    );
}

export default Landing;
