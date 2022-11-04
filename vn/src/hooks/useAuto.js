import { useState } from "react";

let useAuto = () => {
    const [autoToggled, setAutoToggled] = useState(true);
    // State of whether auto mode should be on or off
    const [itv, setItv] = useState();
    // Placeholder state to hold the ID from the setInterval

    // Set the auto mode to be on or off.
    function toggleAutoMode() {
        // setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        let tBox = document.getElementById("clickable-dialogue-box");
        let tBoxClick = () => {
            console.log("--- Click occured ---");
            tBox.click();
        };
        if (autoToggled) {
            setItv(setInterval(tBoxClick, 1500)); // Use a delay state instead and modify it via input element
        } else {
            clearInterval(itv);
        }
        setAutoToggled((prevAutoToggle) => !prevAutoToggle);
    }
    return {
        autoToggled,
        toggleAutoMode,
        itv,
    };
};
export default useAuto;
