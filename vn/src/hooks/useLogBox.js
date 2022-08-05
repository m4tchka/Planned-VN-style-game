import { useState } from "react";

function useLogBox() {
    const [logVisibility, setLogVisibility] = useState(false);
    function toggleLogVisibility() {
        console.log("logVisibility toggled")
        //setLogVisibility((logVisibility) => !logVisibility);
        setLogVisibility(!logVisibility)
        console.log(!logVisibility)
    }
    return { logVisibility, toggleLogVisibility };
}
export default useLogBox;
