import React from "react";
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
        justify: "center",
        marginBottom: 128,
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
        marginBottom: 0,
        color: "#5F6368",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    item: {
        width: "100%",
        margin: 8,
        textDecoration: "none",
    },
}));

function Reset(props) {
    const classes = useStyles();

    const canBeSubmitted = () => {
        const { email } = this.state;
        return email.length > 0;
    };

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Reset your password</Typography>
                    <Typography variant="h5">
                        Enter a new password for your account
                    </Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <Hidden mdUp>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Reset your password
                        </Typography>
                    </Hidden>
                    <CardContent className={classes.form}>
                        <TextField
                            className={classes.item}
                            label="New Password"
                            type="password"
                            name="password"
                            variant="outlined"
                            required={true}
                            fullWidth={true}
                        />

                        <TextField
                            className={classes.item}
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            variant="outlined"
                            required={true}
                            fullWidth={true}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.item}
                            disabled={canBeSubmitted}
                        >
                            Continue
                        </Button>
                        <Hidden mdUp>
                            <Link className={classes.item} to="/login">
                                Login
                            </Link>
                        </Hidden>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Reset;
