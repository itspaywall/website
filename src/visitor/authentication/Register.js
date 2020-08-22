import React from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Hidden,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        marginBottom: 400,
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
        margin: 32,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 64,
        },
    },
    cardTitle: {
        margin: 16,
        marginTop: 32,
        color: "#5F6368",
        textAlign: "center",
    },
    item: {
        display: "block",
        margin: 8,
        textDecoration: "none",
    },
}));

function Register(props) {
    const classes = useStyles();

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Create your account</Typography>
                    <Typography variant="h5">
                        One step away from awesomeness.
                    </Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <Hidden mdUp>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Create your account
                        </Typography>
                    </Hidden>
                    <CardContent>
                        <RegisterForm className={classes.item} />
                        <Hidden mdUp>
                            <Link className={classes.item} to="/login">
                                Login
                            </Link>
                        </Hidden>
                        <Link className={classes.item} to="/forgot-password">
                            Recover Account
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Register;
