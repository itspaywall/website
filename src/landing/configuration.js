import React from "react";

const landingConfiguration = [
    {
        path: "/index",
        component: React.lazy(() => import("./sections/Landing")),
    },
];

export default landingConfiguration;
