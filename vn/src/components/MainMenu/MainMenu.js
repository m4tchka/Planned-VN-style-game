import { Link } from "react-router-dom";
import "./MainMenu.css";
import SignUp from "../SignUp/SignUp";
import useSignUpModal from "../../hooks/useSignUpModal";
import useSignInModal from "../../hooks/useSignInModal";
export default function MainMenu() {
    // const [mainMenuBG, setMainMenuBG] = useState(`/backgrounds/peacefulCabin.jpg`)
    const { showSignUpModal, toggleSignUpModal } = useSignUpModal();
    const { showSignInModal, toggleSignInModal } = useSignInModal();
    // TODO: React Router DOM
    // To make bg full screen, take from top-level div in App.js
    return (
        <div
            className="main-menu"
            // style={{
            //     backgroundImage: `url(${mainMenuBG})`,
            //     backgroundPosition: "center",
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            //     width: "100vw",
            //     height: "100vh",
            // }}
        >
            <h1 className="title"> --- Title --- </h1>
            <div className="vertical-menu">
                <Link className="menu-link" to="/story">
                    <button className="menu-button">Start</button>
                </Link>
                <Link
                    className="menu-link"
                    to="/story"
                    state={{
                        gamestate: JSON.parse(
                            localStorage.getItem("saveFile0")
                        ),
                    }}
                >
                    <button
                        className="menu-button"
                        disabled={!localStorage.getItem("saveFile0")}
                    >
                        Local Load
                    </button>
                </Link>
                <button className="menu-button">Online Load</button>
                <button className="menu-button">Options</button>
                <Link className="menu-link" to="/about">
                    <button className="menu-button">About</button>
                </Link>
                <button className="menu-button">Exit</button>
            </div>
            <div className="account-buttons">
                <button onClick={toggleSignUpModal}>Sign Up</button>
                <button onClick={toggleSignInModal}>Sign In</button>
            </div>
            {showSignUpModal && <SignUp />}
            {showSignInModal && <SignUp />}
            <p>Test</p>
        </div>
    );
}
