
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

//FIXME: 


function AuthenticationPrompt() {
/*     const [emailInput, setEmailInput] = useState("");
    const [pwInput, setPwInput] = useState(""); */

    function handleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth);
    }
    function handleChange(e, setStateFunc) {
        setStateFunc({ value: e.target.value });
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
                onChange={(e, setEmailInput) => {
                    handleChange(e, setEmailInput);
                }}
            >
                Email
            </input>
            <input
                type="text"
                name="password"
                className="input-field"
                id="password-field"
                onChange={(e, setPwInput) => {
                    handleChange(e, setPwInput);
                }}
            >
                Password
            </input>
            <button type="submit"></button>
        </form>
    );
}
export default AuthenticationPrompt