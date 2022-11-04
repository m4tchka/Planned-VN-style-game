import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.js";

export default function SignIn() {
    const [emailInput, setEmailInput] = useState("");
    const [pwInput, setPwInput] = useState("");

    async function handleSignIn(e) {
        e.preventDefault();
        let result = await signInWithEmailAndPassword(
            auth,
            emailInput,
            pwInput
        );
        if (result) {
            const user = result.user;
            // setUser(user);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("token: ", token);
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
            }); 
        */
    }
    return (
        <>
            <div>
                <h2>Sign In</h2>
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
                        handleSignIn(e);
                    }}
                >
                    Sign In
                </button>
            </div>
        </>
    );
}
