/* This is the main component of the Single Page Application (SPA). It includes CSS baseline
 * and theme provider from Material UI, the main router, and other things.
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { PrimaryLayout } from "./common";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ScrollToTop />
                    <PrimaryLayout />
                </ThemeProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
