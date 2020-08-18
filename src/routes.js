import React from "react";
import { Redirect } from "react-router-dom";

import errorConfiguration from "./error/configuration";

const routes = [
    ...errorConfiguration,
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
