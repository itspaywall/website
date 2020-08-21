import React from "react";
import { makeStyles, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        paddingTop: 0,
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
    },
    item: {
        margin: 8,
    },
    title: {
        fontSize: 30,
        color: "#5F6368",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            margin: 32,
        },
    },
    subtitle: {
        fontSize: 20,
        color: "#5F6368",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            margin: 32,
        },
    },
    media: {
        [theme.breakpoints.up("xs")]: {
            height: 240,
            width: 240,
            margin: "auto",
        },
        [theme.breakpoints.up("xs")]: {
            height: 280,
            width: 280,
            margin: "auto",
        },
        [theme.breakpoints.up("xl")]: {
            height: 360,
            width: 360,
            margin: "auto",
        },
    },
}));

function Feature(props) {
    const classes = useStyles();
    const { title, subtitle, cover, alignment } = props;

    if (alignment === 0) {
        return (
            <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.subtitle}>
                        {subtitle}
                    </Typography>
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} className={classes.item} xs={12} lg={2}>
                        <div className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={cover}
                            />
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        );
    } else {
        return (
            <Grid container={true} className={classes.container}>
                <Hidden smDown={true}>
                    <Grid item={true} className={classes.item} xs={12} lg={2}>
                        <div className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={cover}
                            />
                        </div>
                    </Grid>
                </Hidden>
                <Grid item={true} className={classes.item} xs={12} lg={4}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.subtitle}>
                        {subtitle}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Feature;
