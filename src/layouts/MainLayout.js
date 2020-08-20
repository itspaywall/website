import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { renderRoutes } from "react-router-config";
import CircularProgress from "@material-ui/core/CircularProgress";
import MainToolbar from "./MainToolbar";
import MainMobileToolbar from "./MainMobileToolbar";
import MainFooter from "./MainFooter";
import Hidden from "@material-ui/core/Hidden";
import routes from "../routes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: 64,
    },
    contentShift: {
        marginLeft: drawerWidth,
        marginTop: 64,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    progress: {
        maxWidth: 24,
        maxHeight: 24,
        color: "white",
    },
    drawer: {
        width: 50,
    },
    suspense: {
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: -24,
        marginLeft: -24,
    },
}));

function MainLayout(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Hidden smDown={true}>
                    <MainToolbar />
                </Hidden>
                <Hidden mdUp={true}>
                    <MainMobileToolbar />
                </Hidden>
                <main className={classes.content}>
                    <Suspense
                        fallback={
                            <CircularProgress
                                size="48px"
                                className={classes.suspense}
                            />
                        }
                    >
                        {renderRoutes(routes)}
                    </Suspense>
                    {props.children}
                </main>

                <MainFooter />
            </div>
        </React.Fragment>
    );
}

export default MainLayout;
