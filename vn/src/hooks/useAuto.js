import { useState } from "react";

let useAuto = () => {
    const [autoToggled, setAutoToggled] = useState(true);
    // State of whether auto mode should be on or off
    
    function toggleAutoMode(func, delay) {
        console.log("Auto Mode toggled !");
        // autoMode2(func, delay)
        if (autoToggled) {
            setInterval(func, delay)
        } else {
            clearInterval(func)
        }
        setAutoToggled((prevAutoToggle) => !prevAutoToggle);
    };
    // Set the auto mode to be on or off.
    function toggleAutoModeV2 (delay) {
        // setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        let tBox = document.getElementById("clickable-dialogue-box");
        let tBoxClick = () => {tBox.click()}
        if (autoToggled) {
            setInterval(tBoxClick, delay)
            setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        } else {
            clearInterval(tBoxClick)
            setAutoToggled((prevAutoToggle) => !prevAutoToggle);
        }
    }
/*     
    function autoMode2(func, delay) {
        console.log("Automode2 called") 
        if (autoToggled) {
            setInterval(func, delay)
        } else {
            clearInterval(func)
        }
    } 
*/
    return {
        autoToggled,
        toggleAutoMode,
        toggleAutoModeV2
        /* autoMode2, simulateClick, */
    };
};
export default useAuto;
