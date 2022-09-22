import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

//FIXME:

function AuthenticationPrompt() {
    const [emailInput, setEmailInput] = useState("");
    const [pwInput, setPwInput] = useState("");

    async function handleSignUp() {
        // e.preventDefault();
        createUserWithEmailAndPassword(auth, emailInput, pwInput);
    }
    return (
        <form
            onSubmit={(e) => {
                handleSignUp(e);
            }}
        >
            <input
                type="text"
                className="input-field"
                id="email-field"
                name="email"
                placeholder="email"
                onChange={(e) => {
                    setEmailInput(e.target.value);
                }}
            ></input>
            <input
                placeholder="password"
                type="text"
                name="password"
                className="input-field"
                id="password-field"
                onChange={(e) => {
                    setPwInput(e.target.value);
                }}
            ></input>
            <button type="submit"></button>
        </form>
    );
}
export default AuthenticationPrompt;
