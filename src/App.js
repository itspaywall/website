import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { PrimaryLayout } from "./common";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <PrimaryLayout />
                </ThemeProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
