import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: "#5F6368",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
    subtitle: {
        fontSize: 16,
        color: "#5F6368",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
}));

function Feature(props) {
    const classes = useStyles();
    const { title, subtitle } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
        </div>
    );
}

export default Feature;
