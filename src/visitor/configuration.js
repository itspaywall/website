import React from "react";

const configuration = [
    {
        path: "/faqs",
        component: React.lazy(() => import("./FAQs")),
    },
];

export default configuration;
