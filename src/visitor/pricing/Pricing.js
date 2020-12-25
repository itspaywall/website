import React, { useEffect } from "react";
import Plans from "./Plans";

function Pricing(props) {
    useEffect(() => {
        document.title = "Plans and Pricing | Paywall";
    }, []);
    return (
        <div>
            <Plans />
        </div>
    );
}

export default Pricing;
