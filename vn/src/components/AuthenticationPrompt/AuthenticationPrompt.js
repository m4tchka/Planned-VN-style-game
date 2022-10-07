import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase.js";

//FIXME:

function AuthenticationPrompt() {
    const [emailInput, setEmailInput] = useState("");
    const [pwInput, setPwInput] = useState("");
    const [user, setUser] = useState();
    const [text, setText] = useState("");

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
    async function handleSignIn(e) {
        e.preventDefault();
        let result = await signInWithEmailAndPassword(
            auth,
            emailInput,
            pwInput
        );
        if (result) {
            const user = result.user;
            setUser(user);
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
    useEffect(() => {
        console.log("user: ", user);
    });
    return (
        <>
            {!user ? (
                <form
                    onSubmit={(e) => {
                        handleSignUp(e);
                    }}
                >
                    <input
                        placeholder=">text here<"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        value={text}
                    ></input>
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
                    <button
                        type="submit"
                        onClick={(e) => {
                            handleSignIn(e);
                        }}
                    >
                        Sign In
                    </button>
                    <button
                        type="submit"
                        onClick={(e) => {
                            handleSignUp(e);
                        }}
                    >
                        Sign Up
                    </button>
                </form>
            ) : (
                <></>
            )}
        </>
    );
}
export default AuthenticationPrompt;
