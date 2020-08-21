import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 24,
        [theme.breakpoints.up("xl")]: {
            height: 300,
            width: 300,
            margin: "auto",
        },
    },
    title: {
        margin: 0,
        padding: 0,
        fontSize: 20,
        fontWeight: 600,
        [theme.breakpoints.up("xl")]: {
            fontSize: 32,
        },
        color: "#5F6368",
        textAlign: "center",
        paddingBottom: 16,
    },
    subtitle: {
        margin: 0,
        padding: 0,
        fontSize: 16,
        color: "#5F6368",
        textAlign: "center",
    },
}));

export default function Advantage(props) {
    const classes = useStyles();
    const { title, subtitle } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
        </div>
    );
}
