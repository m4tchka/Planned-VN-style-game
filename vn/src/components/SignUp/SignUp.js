import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase.js";

export default async function SignUp() {
    const [emailInput, setEmailInput] = useState("");
    const [pwInput, setPwInput] = useState("");
    async function handleSignUp(e) {
        e.preventDefault();
        let result = await createUserWithEmailAndPassword(
            auth,
            emailInput,
            pwInput
        );
        if (result) {
            const user = result.user;
            setUser(user);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
        }
        /* 
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            }); 
        */
    }
    return (
        <>
            <h2>Sign Up</h2>
            <input
                type="email"
                className="input-field"
                id="email-field"
                name="email"
                placeholder="email"
                onChange={(e) => {
                    setEmailInput(e.target.value);
                }}
                value={emailInput}
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
                value={pwInput}
            ></input>
            <button
                type="submit"
                onClick={(e) => {
                    handleSignUp(e);
                }}
            >
                Sign Up
            </button>
        </>
    );
}
