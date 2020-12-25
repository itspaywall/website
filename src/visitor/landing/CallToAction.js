import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "50%": {
            backgroundPosition: "100% 50%",
        },
        "100%": {
            backgroundPosition: "0% 50%",
        },
    },
    root: {
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        backgroundSize: "200% 200%",
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
                    Try Paywall for free today
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
