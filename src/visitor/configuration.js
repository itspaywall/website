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
