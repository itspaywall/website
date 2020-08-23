import React, { useEffect } from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Hidden,
    TextareaAutosize,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,
        [theme.breakpoints.down("sm")]: {
            height: 250,
        },
    },
    header: {
        margin: 32,
        marginTop: 128,
        textAlign: "center",
    },
    card: {
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 64,
        },
    },
    cardTitle: {
        marginTop: 32,
        margin: 16,
        color: "#5F6368",
        textAlign: "center",
    },
    form: {
        margin: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        margin: 8,
        width: "100%",
    },
    links: {
        margin: 16,
    },
    link: {
        display: "block",
        margin: 8,
        textDecoration: "none",
    },
}));

function Login(props) {
    const classes = useStyles();

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown={true}>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Login to your account</Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <Hidden mdUp={true}>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Login to your account
                        </Typography>
                    </Hidden>
                    <CardContent>
                        <div className={classes.form}>
                            <LoginForm className={classes.item} />
                        </div>
                        <div className={classes.links}>
                            <Hidden mdUp={true}>
                                <Link className={classes.link} to="/register">
                                    Create Account
                                </Link>
                            </Hidden>
                            <Link
                                className={classes.link}
                                to="/forgot-password"
                            >
                                Recover Account
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Login;
