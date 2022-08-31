import { useState } from "react";

function useLoadPromptBox() {
    const [loadPromptVisibility, setLoadPromptVisibility] = useState(false);
    function toggleLoadPromptVisibility() {
        setLoadPromptVisibility(
            (loadPromptVisibility) => !loadPromptVisibility
        );
    }
    return { loadPromptVisibility, toggleLoadPromptVisibility };
}
export default useLoadPromptBox;
