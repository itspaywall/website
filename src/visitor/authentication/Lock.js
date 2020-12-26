import React, { useEffect } from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Hidden,
    TextField,
    Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 280,
        [theme.breakpoints.down("sm")]: {
            height: 200,
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
    cardSubtitle: {
        margin: 8,
        fontSize: 16,
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
        margin: 8,
        textDecoration: "none",
    },
}));

function Lock(props) {
    const classes = useStyles();

    const canSubmit = () => false;

    useEffect(() => {
        document.title = "Session Locked | Paywall";
    }, []);

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown={true}>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Login to continue</Typography>
                    <Typography variant="h5">
                        Due to inactivity, your session is locked.
                    </Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <Hidden mdUp={true}>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Login to continue
                        </Typography>
                        <Typography className={classes.cardSubtitle}>
                            Due to inactivity, your session is locked.
                        </Typography>
                    </Hidden>
                    <CardContent>
                        <div className={classes.form}>
                            <TextField
                                className={classes.item}
                                label="Email Address"
                                name="emailAddress"
                                variant="outlined"
                                fullWidth={true}
                                editable={false}
                            />

                            <TextField
                                className={classes.item}
                                label="Password"
                                type="password"
                                name="password"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.item}
                                disabled={canSubmit}
                            >
                                Continue
                            </Button>
                        </div>
                        <div className={classes.links}>
                            <Hidden mdUp={true}>
                                <Link className={classes.link} to="/login">
                                    Login to Account
                                </Link>
                            </Hidden>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Lock;
