import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 32,
    },
    icon: {
        fontSize: 40,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 16,
        color: theme.palette.primary.main,
    },
    title: {
        margin: 0,
        padding: 0,
        fontSize: 20,
        fontWeight: 600,
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
    const Icon = props.icon;

    return (
        <div className={classes.root}>
            <Icon className={classes.icon} />
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
        </div>
    );
}
