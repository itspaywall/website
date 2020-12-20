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

import React, { useState } from "react";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    logoButton: {
        height: 64,
        width: 160,
        borderRadius: 0,
    },
    appBar: {
        margin: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: theme.palette.primary,
        background: "white",
    },
    button: {
        padding: 16,
        borderRadius: 0,
    },
    action: {
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 16,
        borderRadius: 0,
    },
    menuItem: {
        fontSize: 14,
    },
}));

const links = [
    {
        id: "pricing",
        title: "PRICING",
        url: "/pricing",
    },
    {
        id: "faqs",
        title: "FAQs",
        url: "/faqs",
    },
];

const resources = [
    {
        title: "API REFERENCE",
        external: true,
        url: `${process.env.REACT_APP_DOCS_URL}/api`,
    },
    {
        title: "GUIDES",
        external: true,
        url: `${process.env.REACT_APP_DOCS_URL}/guides`,
    },
];

function MainToolbar(props) {
    const classes = useStyles();
    const history = useHistory();
    const [resourceMenuAnchor, setResourceMenuAnchor] = useState(null);
    const handleLink = (url) => () => history.push(url);

    const handleMenuItem = (item) => () => {
        if (item.external) {
            window.location = item.url;
        }
    };

    const handleResourceMenuClose = () => {
        setResourceMenuAnchor(null);
    };

    const renderMenu = () => (
        <Menu
            anchorEl={resourceMenuAnchor}
            open={resourceMenuAnchor !== null}
            onClose={handleResourceMenuClose}
            className={classes.menu}
        >
            {resources.map((resource) => (
                <MenuItem
                    onClick={handleMenuItem(resource)}
                    className={classes.menuItem}
                >
                    {resource.title}
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <AppBar position="fixed" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" flexGrow={1}>
                    <Button
                        className={classes.logoButton}
                        onClick={handleLink("/index")}
                    >
                        <img
                            src="assets/images/hubble.png"
                            alt="Hubble logo"
                            height="40px"
                        />
                    </Button>
                    {links.map((item) => (
                        <Button
                            key={item.id}
                            onClick={handleLink(item.url)}
                            className={classes.button}
                        >
                            {item.title}
                        </Button>
                    ))}
                    <Button
                        onClick={(event) => setResourceMenuAnchor(event.target)}
                        className={classes.button}
                    >
                        RESOURCES
                    </Button>
                </Box>
                <Button
                    className={classes.action}
                    onClick={handleLink("/login")}
                >
                    LOGIN
                </Button>
                <Button
                    className={classes.action}
                    color="primary"
                    variant="contained"
                    onClick={handleLink("/register")}
                >
                    TRY FOR FREE
                </Button>
            </Toolbar>
            {renderMenu()}
        </AppBar>
    );
}

export default MainToolbar;
