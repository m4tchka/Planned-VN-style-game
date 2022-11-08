import { Link } from "react-router-dom";
import "./MainMenu.css";
import SignUp from "../SignUp/SignUp";
import useSignUpModal from "../../hooks/useSignUpModal";
import useSignInModal from "../../hooks/useSignInModal";
import SignIn from "../SignIn/SignIn";
import { auth } from "../../firebase.js";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
export default function MainMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        auth.currentUser ? true : false
    );
    // const [mainMenuBG, setMainMenuBG] = useState(`/backgrounds/peacefulCabin.jpg`)
    const { showSignUpModal, toggleSignUpModal } = useSignUpModal();
    const { showSignInModal, toggleSignInModal } = useSignInModal();
/*     useEffect(() => {
        if (auth.currentUser) {
            setIsLoggedIn(true);
        }
    }); */
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
            <h1 className="title"> Aiko's Picnic </h1>
            <div className="vertical-menu">
                <Link className="menu-link" to="/story">
                    <button className="menu-button">Start</button>
                </Link>
                <Link
                    className="menu-link"
                    to="/story"
                    state={{
                        gamestate: JSON.parse(
                            localStorage.getItem("quickSaveFile")
                        ),
                    }}
                >
                    <button
                        className="menu-button"
                        disabled={!localStorage.getItem("quickSaveFile")}
                    >
                        Quick Load
                    </button>
                </Link>
                <button>Load</button>
                <button className="menu-button">Online Load</button>
                <button className="menu-button">Options</button>
                <Link className="menu-link" to="/about">
                    <button className="menu-button">About</button>
                </Link>
                <button className="menu-button">Exit</button>
            </div>
            <div className="login-buttons">
                <button className="login-button" onClick={toggleSignUpModal}>
                    Sign Up
                </button>
                <button className="login-button" onClick={toggleSignInModal}>
                    Sign In
                </button>
                {showSignUpModal && <SignUp setIsLoggedIn={setIsLoggedIn} />}
                {showSignInModal && <SignIn setIsLoggedIn={setIsLoggedIn} />}
            </div>
            <p>Test</p>
            {isLoggedIn ? (
                <button
                    onClick={() => {
                        signOut(auth);
                        setIsLoggedIn(false);
                    }}
                >
                    --Log Out--
                </button>
            ) : null}
        </div>
    );
}
