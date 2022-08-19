import { useState } from "react";
/* Fix details:
Diagram of before/ after structure in useLogBox-fix.excalidraw
Destructure and consume both the state & the state setter (toggle) func in the app level. Pass down the state as a prop to the desired component and use it there to conditonally render the element.
*/
function useLogBox() {
    const [logVisibility, setLogVisibility] = useState(false);
    function toggleLogVisibility() {
        setLogVisibility((logVisibility) => !logVisibility);
    }
    return {logVisibility, toggleLogVisibility};
};
export default useLogBox;
