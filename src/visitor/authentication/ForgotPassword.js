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
        color: "#5F6368",
        textAlign: "center",
    },
    cardSubtitle: {
        margin: 16,
        marginBottom: 0,
        color: "#5F6368",
        textAlign: "center",
        fontSize: 16,
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
        marginTop: 0,
        textDecoration: "none",
    },
}));

function Lock(props) {
    const classes = useStyles();

    const canBeSubmitted = () => {
        const { email } = this.state;
        return email.length > 0;
    };

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Recover your account</Typography>
                    <Typography variant="h5">
                        A recovery link will be sent to your email.
                    </Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <Hidden mdUp>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Recover your account
                        </Typography>
                        <Typography className={classes.cardSubtitle}>
                            A recovery link will be sent to your email.
                        </Typography>
                    </Hidden>
                    <CardContent className={classes.form}>
                        <TextField
                            label="Email"
                            autoFocus={true}
                            type="email"
                            name="email"
                            variant="outlined"
                            required={true}
                            fullWidth={true}
                            className={classes.item}
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
                                Login to Account
                            </Link>
                        </Hidden>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Lock;
