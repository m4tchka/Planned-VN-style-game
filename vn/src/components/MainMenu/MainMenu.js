import { Link } from "react-router-dom";
import "./MainMenu.css"
export default function MainMenu() {
    // TODO: React Router DOM
    // To make bg full screen, take from top-level div in App.js
    return (
        <div className="main-menu">
            <h1 className="title"> --- Title --- </h1>
            <div className="vertical-menu">
                <Link to="/story">
                    <button>Start</button>
                </Link>
                <button>Local Load</button>
                <button>Options</button>
                <button>About</button>
                <button>Exit</button>
            </div>
            <p>Test</p>
        </div>
    );
}
