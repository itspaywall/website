import React from "react";

const configuration = [
    {
        path: "/index",
        component: React.lazy(() => import("./landing/Landing")),
    },
    {
        path: "/faqs",
        component: React.lazy(() => import("./FAQs")),
    },
    {
        path: "/pricing",
        component: React.lazy(() => import("./pricing/Pricing")),
    },
    {
        path: "/login",
        component: React.lazy(() => import("./authentication/Login")),
    },
    {
        path: "/register",
        component: React.lazy(() => import("./authentication/Register")),
    },
    {
        path: "/forgot-password",
        component: React.lazy(() => import("./authentication/ForgotPassword")),
    },
    {
        path: "/reset-password",
        component: React.lazy(() => import("./authentication/ResetPassword")),
    },
    {
        path: "/lock",
        component: React.lazy(() => import("./authentication/Lock")),
    },
];

export default configuration;
