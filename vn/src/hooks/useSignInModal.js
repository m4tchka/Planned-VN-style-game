import { useState } from "react";

function useSignInModal() {
    const [showSignInModal, setShowSignInModal] = useState(false);

    function toggleSignInModal() {
        console.log("modal toggled: ", showSignInModal);
        
        setShowSignInModal(!showSignInModal);
    }

    return { showSignInModal, toggleSignInModal };
}
export default useSignInModal;