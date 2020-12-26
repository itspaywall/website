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
 * This contains the footer of the page and is independent for all screens.
 */

import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
    footer: {
        color: "#5F6368",
        paddingTop: 140,
        paddingLeft: 32,
        paddingRight: 32,
    },
    about: {
        marginTop: 16,
    },
    contact: {
        marginTop: 4,
    },
    logo: {
        width: 56,
        height: "auto",
        display: "inline-block",
        marginRight: 16,
        verticalAlign: "middle",
    },
    link: {
        fontSize: 14,
        color: theme.palette.text.primary,
        textDecoration: "none",
    },
    icon: {
        fontSize: 16,
        paddingTop: 2,
        marginRight: 8,
    },
    copyright: {
        marginTop: 8,
        marginBottom: 24,
    },
}));

const groups = [
    /*{
        'id'   : 'company',
        'title': 'Company',
        'children' : [
            {
                'id' : 'privacy-policy',
                'title' : 'Privacy Policy',
                'url' : '/privacy-policy'
            },
            {
                'id' : 'terms',
                'title' : 'Terms & Conditions',
                'url' : '/terms'
            }
            {
                'id' : 'about',
                'title' : 'About',
                'url' : '/about'
            },
            {
                'id' : 'customers',
                'title' : 'Customers',
                'url' : '/customers'
            },
            {
                'id' : 'solutions',
                'title' : 'Solutions',
                'url' : '/solutions'
            },
            {
                'id' : 'careers',
                'title': 'Careers',
                'url' : '/careers'
            },
            {
                'id' : 'contact-us',
                'title' : 'Contact Us',
                'url' : '/contact'
            }
        ]
    },
    
    {
        'id' : 'features',
        'title' : 'Features',
        'children' : [
        ]
    },
    {
        'id'   : 'industries',
        'title': 'Industries',
        'type' : 'group',
        'children' : [
            {
                id: 'small-business',
                title: 'Small Business',
                url: '/industry/small-business'
            },
            {
                id: 'manufacturing',
                title: 'Manufacturing',
                url: '/industry/manufacturing'
            },
            {
                id: 'insurance',
                title: 'Insurance',
                url: '/industry/insurance'
            },
            {
                id: 'saas-business',
                title: 'SaaS Business',
                url: '/industry/saas-business'
            },
            {
                id: 'finance',
                title: 'Finance',
                url: '/industry/finance'
            },
            {
                id: 'retail',
                title: 'Retail',
                url: '/industry/retail'
            },
            {
                id: 'agency',
                title: 'Agency',
                url: '/industry/agency'
            },
            {
                id: 'logistics',
                title: 'Logistics',
                url: '/industry/logistics'
            },
            {
                id: 'ecommerce',
                title: 'Ecommerce',
                url: '/industry/ecommerce'
            }
        ]
    },*/
    {
        id: "resources",
        title: "Resources",
        type: "group",
        children: [
            {
                id: "pricing",
                title: "Pricing",
                url: "/pricing",
            },
            /*{
                'id'   : 'use-cases',
                'title': 'Use Cases',
                'url'  : '/use-cases'
            },
            {
                'id'   : 'blog',
                'title': 'Blog',
                'url'  : '/blog'
            },
            {
                'id'   : 'developer',
                'title': 'Developer',
                'url'  : '/developer'
            },
            {
                'id'   : 'documentation',
                'title': 'Documentation',
                'url'  : '/documentation'
            },*/
            {
                id: "faqs",
                title: "FAQs",
                url: "/faqs",
            } /*
            {
                'id'   : 'research',
                'title': 'Research',
                'url'  : '/research'
            },*/,
        ],
    },
    {
        id: "connect",
        title: "Connect",
        children: [
            {
                id: "linkedin",
                url: "https://www.linkedin.com/company/itshubble",
                title: "LinkedIn",
                external: true,
            },
            {
                id: "github",
                url: "https://www.github.com/itshubble",
                title: "GitHub",
                external: true,
            },
        ],
    },
];

function MainFooter() {
    const classes = useStyles();
    return (
        <Container className={classes.footer}>
            <Grid container={true} spacing={6}>
                <Grid item={true} lg={4}>
                    <p>
                        <img
                            alt="Hubble Subscriptions Logo"
                            src="assets/images/hubble.png"
                            height="50px"
                        />
                    </p>
                    <Typography className={classes.about}>
                        Paywall offers an easy-to-integrate subscription
                        management service to startups and businesses, with a
                        variety of customer acquisition and retention tools.
                    </Typography>
                    <Typography className={classes.contact}>
                        <Icon className={classes.icon}>email</Icon>
                        <a
                            href="mailto:contact@hubbsuite.com"
                            className={classes.link}
                        >
                            contact@hubblesuite.com
                        </a>
                        <br />
                        <Icon className={classes.icon}>phone</Icon>
                        <a href="tel:+918310843835" className={classes.link}>
                            +91 83108 43835
                        </a>
                    </Typography>
                </Grid>
                <Grid item={true} xs={12} lg={8}>
                    <Grid container={true} spacing={0}>
                        {groups.map((group, index) => (
                            <Grid
                                key={group.id}
                                item={true}
                                xs={12}
                                sm={4}
                                lg={2}
                            >
                                <Typography className={classes.groupTitle}>
                                    {group.title}
                                </Typography>
                                <Typography>
                                    {group.children.map((child, index) => (
                                        <React.Fragment>
                                            {child.external ? (
                                                <a
                                                    key={child.id}
                                                    href={child.url}
                                                    className={classes.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {child.title}
                                                </a>
                                            ) : (
                                                <Link
                                                    key={child.id}
                                                    to={child.url}
                                                    className={classes.link}
                                                >
                                                    {child.title}
                                                </Link>
                                            )}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item={true} lg={12}>
                    <Typography className={classes.copyright}>
                        &copy; 2020 Paywall, Inc.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainFooter;
