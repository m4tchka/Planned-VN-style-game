import { useState } from "react";

function useSignUpModal() {
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    function toggleSignUpModal() {
        console.log("modal toggled: ", showSignUpModal);
        
        setShowSignUpModal(!showSignUpModal);
    }

    return { showSignUpModal, toggleSignUpModal };
}
export default useSignUpModal;