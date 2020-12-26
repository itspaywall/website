import React, { useState } from "react";
import {
    Button,
    InputAdornment,
    Icon,
    TextField,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import client from "../../server/api";
import httpStatus from "../../util/httpStatus";
import crossStorage from "../../server/crossStorage";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        width: "100%",
        margin: 8,
    },
}));

function LoginForm(props) {
    const { handleErrorMessage } = props;
    const classes = useStyles();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const canSubmit = () => identifier && password;
    const handleLogin = async () => {
        try {
            const response = await client.createSession(identifier, password);
            const user = JSON.stringify(response.data);

            try {
                const client = await crossStorage.connection;
                client.set("user", user);
                window.location = `${process.env.REACT_APP_CONSOLE_URL}/analytics`;
            } catch (error) {
                console.log(
                    "Cannot establish connection to the cross storage hub."
                );
                console.log(error);
                history.push("/error/500");
            }
        } catch (error) {
            const { response } = error;
            if (response && response.status === httpStatus.BAD_REQUEST) {
                handleErrorMessage(response.data.message);
            } else {
                console.log(response);
                history.push("/error/500");
            }
        }
    };

    return (
        <div className={classes.root}>
            <TextField
                className={classes.item}
                type="text"
                name="emailAddress"
                label="Email Address"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className="text-20" color="action">
                                email
                            </Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
            />

            <TextField
                className={classes.item}
                type="password"
                name="password"
                label="Password"
                validations={{
                    minLength: 4,
                }}
                validationErrors={{
                    minLength: "Minimum character length is 4.",
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className="text-20" color="action">
                                vpn_key
                            </Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.item}
                disabled={!canSubmit()}
                onClick={handleLogin}
                value="firebase"
            >
                Login
            </Button>
        </div>
    );
}

export default LoginForm;
