import React, { Component } from "react";
import {
    Button,
    InputAdornment,
    Icon,
    TextField,
    withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
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
});

class RegisterForm extends Component {
    state = {
        canSubmit: false,
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({ canSubmit: false });
    };

    enableButton = () => {
        this.setState({ canSubmit: true });
    };

    onSubmit = (model) => {
        this.props.submitRegister(model);
    };

    render() {
        const { canSubmit } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TextField
                    className={classes.item}
                    type="text"
                    name="firstName"
                    label="First Name"
                    validations={{
                        minLength: 4,
                    }}
                    validationErrors={{
                        minLength: "Min character length is 4",
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon className="text-20" color="action">
                                    person
                                </Icon>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    required={true}
                />

                <TextField
                    className={classes.item}
                    type="text"
                    name="lastName"
                    label="Last Name"
                    validations={{
                        minLength: 4,
                    }}
                    validationErrors={{
                        minLength: "Min character length is 4",
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon className="text-20" color="action">
                                    person
                                </Icon>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    required={true}
                />

                <TextField
                    className={classes.item}
                    type="text"
                    name="email"
                    label="Email"
                    validations="isEmail"
                    validationErrors={{
                        isEmail: "Please enter a valid email",
                    }}
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
                />

                <TextField
                    className={classes.item}
                    type="password"
                    name="password"
                    label="Password"
                    validations="equalsField:password-confirm"
                    validationErrors={{
                        equalsField: "Passwords do not match",
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
                />

                <TextField
                    className={classes.item}
                    type="password"
                    name="password-confirm"
                    label="Confirm Password"
                    validations="equalsField:password"
                    validationErrors={{
                        equalsField: "Passwords do not match",
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
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.item}
                    disabled={!canSubmit}
                    value="legacy"
                >
                    Register
                </Button>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(RegisterForm);
