import { Link } from "react-router-dom";
export default function MainMenu() {
    // TODO: React Router DOM
    // To make bg full screen, take from top-level div in App.js
    return (
        <div className="MainMenuPage">
            <h1 className="Title"> --- Title --- </h1>
            <div className="vertical-ribbon">
                <Link to="/story">
                    <button>Start</button>
                </Link>
                <button>Load</button>
                <button>Options</button>
                <button>About</button>
                <button>Exit</button>
            </div>
            <p>Test</p>
        </div>
    );
}
