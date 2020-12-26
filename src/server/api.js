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

import axios from "axios";

const DEFAULT_API_VERSION = "v1";

export function newClient(version = DEFAULT_API_VERSION) {
    const prefix = `${process.env.REACT_APP_API_URL}/api/${version}`;
    return {
        createUser: (firstName, lastName, emailAddress, password) =>
            axios.post(`${prefix}/users`, {
                firstName,
                lastName,
                emailAddress,
                password,
            }),
        createSession: (emailAddress, password) =>
            axios.post(`${prefix}/sessions`, {
                emailAddress,
                password,
            }),
    };
}

const defaultClient = newClient();

export default defaultClient;
