import { useState } from "react";

let useAuto = () => {
    const [autoToggled, setAutoToggled] = useState(false);
    // State of whether auto mode should be on or off
    
    function toggleAutoMode() {
        console.log("Auto Mode toggled !");
        setAutoToggled((prevAutoToggle) => !prevAutoToggle);
    }
    // Set the auto mode to be on or off.

    function autoMode2(func, delay) {
        console.log("Automode2 called") 
        toggleAutoMode() 
        if (autoToggled) {
            setInterval(func, delay)
        } else {
            clearInterval(func)
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
