import { useState } from "react";

function useSavePromptBox() {
    const [savePromptVisibility, setLogVisibility] = useState(false);
    function toggleSavePromptVisibility() {
        setLogVisibility((savePromptVisibility) => !savePromptVisibility);
    }
    return {savePromptVisibility, toggleSavePromptVisibility};
};
export default useSavePromptBox;