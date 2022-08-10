import { useState } from "react";

let useAuto = () => {
    const [autoToggled, setAutoToggled] = useState(false);
    function toggleAutoMode() {
        console.log("Auto Mode toggled !");
        setAutoToggled((prevAutoToggle) => !prevAutoToggle);
    }
    // Set the auto mode to be on or off.

    function autoMode2(func, delay) {
        console.log("Automode2 called")
        let autofunc = null;
        if (autoToggled===true) {
            autofunc = setInterval(func, delay)
        } else {
            clearInterval(autofunc)
        }
    }

    console.log("autoToggled (useAuto): ", autoToggled);
    return {
        autoToggled,
        toggleAutoMode,
        autoMode2 /* simulateClick */,
    };
};
export default useAuto;
