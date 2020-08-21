import React from "react";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import MainDrawer from "./MainDrawer";

const useStyles = makeStyles((theme) => ({
    logoButton: {
        height: 64,
        width: 160,
        borderRadius: 0,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: theme.palette.primary,
        background: "white",
    },
}));

function MainMobileToolbar(props) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" flexGrow={1}>
                    <Button
                        className={classes.logoButton}
                        onClick={() => history.push("/index")}
                    >
                        <img
                            src="assets/images/hubble.png"
                            alt="Hubble logo"
                            height="40px"
                        />
                    </Button>
                </Box>
                <MainDrawer />
            </Toolbar>
        </AppBar>
    );
}

export default MainMobileToolbar;
