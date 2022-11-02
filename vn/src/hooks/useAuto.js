import { useState } from "react";

let useAuto = () => {
    const [autoToggled, setAutoToggled] = useState(true);
    // State of whether auto mode should be on or off
    const [itv, setItv] = useState();
    // Placeholder state to hold the ID from the setInterval

    function toggleAutoMode(func, delay) {
        console.log("Auto Mode toggled !");
        // autoMode2(func, delay)
        if (autoToggled) {
            setInterval(func, delay);
        } else {
            clearInterval(func);
        }
        setAutoToggled((prevAutoToggle) => !prevAutoToggle);
    }
    // Set the auto mode to be on or off.
    function toggleAutoModeV2() {
        // setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        let tBox = document.getElementById("clickable-dialogue-box");
        let tBoxClick = () => {
            console.log("clicky");
            tBox.click();
        };
        if (autoToggled) {
            setItv(setInterval(tBoxClick, 3000)); // Use a delay state instead and modify it via input element
            setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        } else {
            clearInterval(itv);
            setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        }
    }
    return {
        autoToggled,
        toggleAutoMode,
        toggleAutoModeV2,
    };
};
export default useAuto;
