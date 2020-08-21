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
];

export default configuration;
