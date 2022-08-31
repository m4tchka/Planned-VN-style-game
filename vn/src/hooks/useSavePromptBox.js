import { useState } from "react";

function useSavePromptBox() {
    const [savePromptVisibility, setSavePromptVisibility] = useState(false);
    function toggleSavePromptVisibility() {
        setSavePromptVisibility((savePromptVisibility) => !savePromptVisibility);
    }
    return {savePromptVisibility, toggleSavePromptVisibility};
};
export default useSavePromptBox;