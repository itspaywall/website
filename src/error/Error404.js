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

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    image: {
        marginTop: 120,
        width: 600,
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down("sm")]: {
            width: 300,
        },
    },
    title: {
        marginTop: 24,
        fontsize: 28,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
    description: {
        marginTop: 8,
        fontSize: 20,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
        },
    },
    link: {
        marginTop: 16,
        textAlign: "center",
        display: "block",
    },
}));

function Error404(props) {
    const classes = useStyles();
    return (
        <Grid container={true} justify="center" className={classes.root}>
            <Grid item={true} xs={12} lg={6}>
                <img
                    className={classes.image}
                    src="assets/images/404.png"
                    alt="Error 404"
                />

                <Typography
                    variant="h4"
                    color="textSecondary"
                    className={classes.title}
                >
                    Looks like you are lost
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.description}
                >
                    The page you are looking for may have been removed or moved
                    to another location.
                </Typography>

                <Link className={classes.link} to="/index">
                    Go back to home
                </Link>
            </Grid>
        </Grid>
    );
}

export default Error404;
