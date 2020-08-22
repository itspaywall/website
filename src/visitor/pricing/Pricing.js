import React, { useEffect } from "react";
import Plans from "./Plans";

function Pricing(props) {
    useEffect(() => {
        document.title = "Plans and Pricing | Hubble Subscriptions";
    }, []);
    return (
        <div>
            <Plans />
        </div>
    );
}

export default Pricing;
