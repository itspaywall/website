import axios from "axios";

const DEFAULT_API_VERSION = "v1";

export function newClient(version = DEFAULT_API_VERSION) {
    const prefix = `{process.env.REACT_APP_SERVER_URL}/api/${version}`;
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
