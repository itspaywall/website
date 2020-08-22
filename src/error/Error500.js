import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    image: {
        marginTop: 120,
        width: 600,
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down("sm")]: {
            width: 300,
        },
    },
    title: {
        marginTop: 24,
        fontsize: 28,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
    description: {
        marginTop: 8,
        fontSize: 20,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
        },
    },
    link: {
        marginTop: 16,
        textAlign: "center",
        display: "block",
    },
}));

function Error500(props) {
    const classes = useStyles();
    return (
        <Grid container={true} justify="center" className={classes.root}>
            <Grid item={true} xs={12} lg={6}>
                <img
                    className={classes.image}
                    src="assets/images/500.png"
                    alt="Error 404"
                />
                <Typography
                    variant="h4"
                    color="textSecondary"
                    className={classes.title}
                >
                    Well, you broke the Internet!
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.description}
                >
                    Just kidding! Looks like we have an internal issue, please
                    try again in a couple of minutes.
                </Typography>

                <Link className={classes.link} to="/index">
                    Go back to home
                </Link>
            </Grid>
        </Grid>
    );
}

export default Error500;
