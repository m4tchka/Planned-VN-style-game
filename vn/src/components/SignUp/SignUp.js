import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

export default function SignUp() {
    async function handleSignUp() {
        const signUpForm = document.querySelector(".signup");
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let em = signUpForm.email.value;
            let pw = signUpForm.password.value;
            createUserWithEmailAndPassword(auth, em, pw)
                .then((cred) => {
                    console.log("User created:", cred.user);
                    signUpForm.reset();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }

    /* async function handleSignUp(e) {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, emailInput, pwInput)
            .then((userCredential) => {
                // Created
                const user = userCredential.user;
                // ...
                console.log("User created: ", user);
            })
            // .reset()
            .catch((error) => {
                console.log(error.message);
                // ..
            });

        // let result = await createUserWithEmailAndPassword(
        //     auth,
        //     emailInput,
        //     pwInput
        // );
        // if (result) {
        //     const user = result.user;
        //     // setUser(user);
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        // }
    } */
    return (
        <>
            <form className="signup">
                <h2>Sign Up</h2>
                <input
                    className="input-field"
                    id="email-field"
                    name="email"
                    placeholder="email"
                    type="email"
                ></input>
                <input
                    className="input-field"
                    id="password-field"
                    name="password"
                    placeholder="password"
                    type="text"
                ></input>
                <button
                    type="submit"
                    onClick={(e) => {
                        handleSignUp(e);
                    }}
                >
                    Sign Up
                </button>
            </form>
        </>
    );
}
