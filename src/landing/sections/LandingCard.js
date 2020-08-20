import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 8,
        borderRadius: 0,
    },
    media: {
        height: 200,
        width: 200,
        margin: "auto",
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

export default function LandingCard(props) {
    const classes = useStyles();
    const { image, title, subtitle } = props;

    return (
        <Paper className={classes.root} elevation={4}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.subtitle}>{subtitle}</Typography>
            </CardContent>
        </Paper>
    );
}
