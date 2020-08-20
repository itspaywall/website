import React from "react";
import { Redirect } from "react-router-dom";

import errorConfiguration from "./error/configuration";
import visitorConfiguration from "./visitor/configuration";
import landingConfiguration from "./landing/configuration";

const routes = [
    ...landingConfiguration,
    ...errorConfiguration,
    ...visitorConfiguration,
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/index" />,
    },
    {
        component: () => <Redirect to="/error/404" />,
    },
];

export default routes;
