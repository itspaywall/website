import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        background:
            "linear-gradient(90deg, rgba(29,161,242,1) 0%, rgba(222,0,255,1) 100%)",
        backgroundSize: "100% 100%",
        animation: "$gradient 5s ease infinite",
        color: theme.palette.primary.contrastText,
        width: "100%",
        paddingTop: 80,
        paddingBottom: 80,
        marginTop: 128,
    },
    title: {
        fontWeight: 800,
        fontSize: 40,
        textAlign: "center",

        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
            lineHeight: 1.2,
        },
    },
    subtitle: {
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        marginTop: 16,
        [theme.breakpoints.down("sm")]: {
            fontSize: 18,
        },
    },
    action: {
        borderRadius: 24,
        width: 200,
        height: 40,
        marginTop: 32,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        borderColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.contrastText,
    },
}));

function CallToAction() {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push("/register");

    return (
        <div className={classes.root}>
            <Container>
                <Typography className={classes.title}>
                    Try Hubble Subscriptions for free today
                </Typography>
                <Typography className={classes.subtitle}>
                    Integrating it into your business and application is easy.
                </Typography>
                <Button
                    variant="outlined"
                    className={classes.action}
                    onClick={handleClick}
                >
                    GET STARTED
                </Button>
            </Container>
        </div>
    );
}

export default CallToAction;
