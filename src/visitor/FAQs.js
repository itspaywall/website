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

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const faq = [
    {
        id: 1,
        title: "Starting with Paywall",
        questions: [
            {
                id: 1,
                question: "How do I get started with Paywall?",
                answer:
                    "You can begin using Paywall today. You can request for a demo " +
                    "or create a free account to experience Paywall. When " +
                    "you first sign up, you will be take through a brief tutorial which " +
                    "will allow you to explore our platform. Our trial provides " +
                    "access to our features and functionality so you can ensure that " +
                    "Paywall works for your business.",
            },
            {
                id: 2,
                question: "How do Paywall's pricing plans work?",
                answer:
                    "Paywall's pricing plans charge on a per-transaction basis, " +
                    "percentage of revenue, and a base monthly fee. A per-transaction " +
                    "fee will be assessed against successful payments, refunds, voids, " +
                    "authorizations, and declines. Paywall does not charge for " +
                    "transactions that failed due to a gateway connection issue.",
            },
            {
                id: 3,
                question: "Is there a setup fee to use Paywall?",
                answer:
                    "Paywall does not charge a setup fee. You may sign up and " +
                    "use Paywall for free at any time. We only " +
                    "charge our fees once you sign up for a Paywall subscription " +
                    "and are ready to start collecting money.",
            },
            {
                id: 4,
                question: "Can I customize the Hosted Payment Pages?",
                answer:
                    "Hosted payment pages provide merchants with an easy, " +
                    "PCI-compliant approach to get up and running with minimal " +
                    "effort. The look and feel can be customized with your logo " +
                    "and custom background color. Beyond the basic required fields " +
                    "such as name, email address and billing information, you may " +
                    "update your hosted pages to request a variety of additional data " +
                    "from your users including company name, VAT number, GST number, " +
                    "and coupon codes among others.",
            },
            {
                id: 5,
                question: "Does Paywall require a long-term contract?",
                answer:
                    "Paywall is a month-to-month service so there are no long-term " +
                    "commitments, and you can cancel at anytime.",
            },
        ],
    },
    {
        id: 2,
        title: "Handling Subscriptions",
        questions: [
            {
                id: 1,
                question:
                    "Can I create subscriptions without billing information?",
                answer:
                    "Paywall is designed to handle paid subscriptions, so an " +
                    "account must have billing information before a subscription " +
                    "(fully discounted, or free subscriptions) may be created. " +
                    "However, you can create subscription plans that do not " +
                    "require billing information at sign-up, if there is a " +
                    "free trial. Subscriptions can also be created without " +
                    "billing information if the collection method is manual.",
            },
            {
                id: 2,
                question:
                    "What happens to subscribers that subscribe to a plan " +
                    "if I change the price or delete the plan?",
                answer:
                    "Paywall supports price grandfathering. When a subscription " +
                    "plan changes, your existing subscribers will remain " +
                    "grandfathered in at the terms they agreed to. New " +
                    "subscribers will be subscribed with the updated pricing " +
                    "terms. Price grandfathering does not apply to changes in " +
                    "bill cycle (that is, monthly to yearly), however, so " +
                    "changes to billing frequency should be made with a new " +
                    "subscription plan.",
            },
            {
                id: 3,
                question:
                    "How does billing work in shorter months, such as February?",
                answer:
                    "Customers are always charged on the closest corresponding " +
                    "date of the following month. For example, a customer who " +
                    "would normally be billed on the 31st of a month will either " +
                    "be billed on the 30th of a 30-day month, or on the " +
                    "28th of February.",
            },
            {
                id: 4,
                question: "Does Paywall support one-time transactions as well?",
                answer:
                    "Yes. You can submit one-time charges for immediate " +
                    "collection. Charges can be submitted at any time, " +
                    "which will be rolled up and collected when a subscription " +
                    "renews.",
            },
            {
                id: 5,
                question: "Can I accept check payments?",
                answer:
                    "Yes. You can use the Manual Payments feature to log " +
                    "check payments in Paywall.",
            },
        ],
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
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
    header: {
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        backgroundSize: "200% 200%",
        animation: "$gradient 5s ease infinite",
        color: theme.palette.primary.contrastText,
        height: 300,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            padding: 24, // for sm
        },
    },
    title: {
        fontSize: 24,
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 512,
    },
    subtitle: {
        marginTop: 40,
        fontSize: 20,
    },
    searchPaper: {
        display: "flex",
        alignItems: "center",
        height: 48,
        width: "100%",
        marginTop: 16,
        borderRadius: 24,
        [theme.breakpoints.up("md")]: {
            maxWidth: 512,
        },
        paddingLeft: 16,
        paddingRight: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    search: {},
    groups: {},
    group: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40,
        [theme.breakpoints.up("lg")]: {
            maxWidth: "70%",
        },
    },
    groupTitle: {
        fontSize: 20,
        marginBottom: 16,
        color: "#5F6368",
    },
    panel: {
        margin: 0,
        borderWidth: "1px 1px 0 1px",
        borderStyle: "solid",
        borderColor: theme.palette.divider,
        "&:first-child": {
            borderRadius: "16px 16px 0 0",
        },
        "&:last-child": {
            borderRadius: "0 0 16px 16px",
            borderWidth: "0 1px 1px 1px",
        },
    },
    question: {
        display: "flex",
        alignItems: "center",
        color: "#5F6368",
    },
    questionText: {
        color: "#5F6368",
    },
    questionIcon: {
        color: "#5F6368",
        marginRight: 8,
    },
    [theme.breakpoints.down("sm")]: {
        header: {
            height: 300,
        },
        subtitle: {
            marginTop: 80,
        },
    },
}));

function FAQs(props) {
    const [data] = useState(faq);
    const [expanded, setExpanded] = useState(false);
    const [searchText, setSearchText] = useState("");
    const classes = useStyles();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const getFilteredArray = (array, searchText) => {
        let result = array;
        if (searchText.length > 0) {
            result = [];
            const length = array.length;
            for (let i = 0; i < length; i++) {
                const group = array[i];
                const filteredQuestions = group.questions.filter(
                    (groupItem) => {
                        const lowerCaseQuestion = groupItem.question.toLowerCase();
                        const lowerCaseAnswer = groupItem.answer.toLowerCase();
                        const lowerCaseQuery = searchText.toLowerCase();
                        return (
                            lowerCaseQuestion.indexOf(lowerCaseQuery) >= 0 ||
                            lowerCaseAnswer.indexOf(lowerCaseQuery) >= 0
                        );
                    }
                );
                if (filteredQuestions.length > 0) {
                    result.push({
                        ...group,
                        questions: filteredQuestions,
                    });
                }
            }
        }
        return result;
    };
    const faqs = getFilteredArray(data, searchText);

    useEffect(() => {
        document.title = "FAQs | Paywall";
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography color="inherit" className={classes.subtitle}>
                    We are here to help you
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="inherit"
                    className={classes.title}
                >
                    Frequently Asked Questions
                </Typography>

                <Paper className={classes.searchPaper} elevation={0}>
                    <Icon color="action" className={classes.searchIcon}>
                        search
                    </Icon>
                    <Input
                        placeholder="Search..."
                        className={classes.search}
                        disableUnderline={true}
                        fullWidth={true}
                        value={searchText}
                        onChange={handleSearch}
                    />
                </Paper>
            </div>

            <Container className={classes.groups}>
                {faqs.map((group, index) => (
                    <div className={classes.group}>
                        <Typography className={classes.groupTitle}>
                            {group.title}
                        </Typography>
                        {group.questions.map((faq) => (
                            <ExpansionPanel
                                className={classes.panel}
                                key={faq.id}
                                expanded={
                                    expanded.faqId === faq.id &&
                                    expanded.groupId === group.id
                                }
                                onChange={handleChange({
                                    faqId: faq.id,
                                    groupId: group.id,
                                })}
                                elevation={1}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<Icon>expand_more</Icon>}
                                >
                                    <div className={classes.question}>
                                        <Icon
                                            className={classes.questionIcon}
                                            color="action"
                                        >
                                            help_outline
                                        </Icon>
                                        <Typography
                                            className={classes.questionText}
                                        >
                                            {faq.question}
                                        </Typography>
                                    </div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <Typography className="">
                                        {faq.answer}
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default FAQs;
