import React, { useEffect } from "react";
import Plans from "./Plans";

function Pricing(props) {
    useEffect(() => {
        document.title = "Hubble Plans and Pricing";
    }, []);
    return (
        <div>
            <Plans />
        </div>
    );
}

export default Pricing;
