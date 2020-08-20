import React from "react";
import { Redirect } from "react-router-dom";

import errorConfiguration from "./error/configuration";
import visitorConfiguration from "./visitor/configuration";

const routes = [
    ...errorConfiguration,
    ...visitorConfiguration,
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/analytics" />,
    },
    {
        component: () => <Redirect to="/error/404" />,
    },
];

export default routes;
