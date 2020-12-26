/*
 * Copyright 2017-2020 Samuel Rowe, Joel E. Rego
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * In the website, all the pages have a toolbar, a content area, and a footer.
 * Instead of rewriting these three components in all the pages, we use a layout.
 * A layout defines the structure of a single page. For example, on a laptop of
 * size large and extra large, the MainLayout component defines a structure with
 * menus at the top and a footer at the bottom. The MainLayout described for LG
 * and XL will look awkward on smaller screens. So the MainLayout is designed to
 * change itself based on the screen size. This capability to change based on the
 * screen size is called responsiveness.
 */

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
