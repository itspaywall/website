import React from "react";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";

const styles = (theme) => ({
    footer: {
        paddingTop: 140,
        paddingLeft: 32,
        paddingRight: 32,
    },
    groupTitle: {
        fontWeight: 600,
    },
    about: {
        marginTop: 16,
    },
    logo: {
        width: 56,
        height: "auto",
        display: "inline-block",
        marginRight: 16,
        verticalAlign: "middle",
    },
    companyName: {
        fontWeight: 700,
        fontSize: 20,
        verticalAlign: "middle",
    },
    link: {
        fontSize: 14,
    },
    connectWithUs: {
        display: "block",
        textAlign: "center",
        fontWeight: 600,
    },
    socialMediaContainer: {
        textAlign: "center",
    },
    socialMedia: {
        display: "block",
        marginBottom: 8,
    },
    copyright: {
        marginTop: 8,
        marginBottom: 24,
    },
});

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
                url: "https://www.linkedin.com/itshubble",
                title: "LinkedIn",
            },
            {
                id: "github",
                url: "https://www.github.com/itshubble",
                title: "GitHub",
            },
        ],
    },
];

const FooterLayout2 = ({ classes, theme }) => {
    const linkStyle = {
        color: theme.palette.text.primary,
        textDecoration: "none",
    };

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
                        Hubble offers an easy-to-integrate subscription
                        management service to startups and businesses, with a
                        variety of customer acquisition and retention tools.
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
                                            <Link
                                                key={child.id}
                                                style={linkStyle}
                                                to={child.url}
                                                className={classes.link}
                                            >
                                                {child.title}
                                            </Link>
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
                        &copy; 2020 Hubble, Inc.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default withStyles(styles, { withTheme: true })(
    withRouter(FooterLayout2)
);
