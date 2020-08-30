import axios from "axios";

const DEFAULT_API_VERSION = "v1";

export function newClient(version = DEFAULT_API_VERSION) {
    const prefix = `http://localhost:3001/api/${version}`;
    return {
        createUser: (firstName, lastName, emailAddress, password) =>
            axios.post(`${prefix}/users`, {
                firstName,
                lastName,
                emailAddress,
                password,
            }),
        createSession: (identifier, password) =>
            axios.post(`${prefix}/sessions`, {
                identifier,
                password,
            }),
    };
}

const defaultClient = newClient();

export default defaultClient;
