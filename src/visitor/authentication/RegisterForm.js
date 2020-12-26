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

function RegisterForm(props) {
    const { handleErrorMessage } = props;
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

    const canSubmit = () => {
        return (
            firstName &&
            lastName &&
            emailAddress &&
            password &&
            password === confirmPassword
        );
    };
    const handleRegister = async () => {
        try {
            const response = await client.createUser(
                firstName,
                lastName,
                emailAddress,
                password
            );
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
                name="firstName"
                label="First Name"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon color="action">person</Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />

            <TextField
                className={classes.item}
                type="text"
                name="lastName"
                label="Last Name"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon color="action">person</Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />

            <TextField
                className={classes.item}
                type="text"
                name="email"
                label="Email"
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
                value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
            />

            <TextField
                className={classes.item}
                type="password"
                name="password"
                label="Password"
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

            <TextField
                className={classes.item}
                type="password"
                name="confirmPassword"
                label="Confirm Password"
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
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.item}
                disabled={!canSubmit()}
                onClick={handleRegister}
                value="legacy"
            >
                Register
            </Button>
        </div>
    );
}

export default RegisterForm;
