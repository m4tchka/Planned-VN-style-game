import { Link } from "react-router-dom";
import "./MainMenu.css";

export default function MainMenu() {
    // TODO: React Router DOM
    // To make bg full screen, take from top-level div in App.js
    return (
        <div className="main-menu">
            <h1 className="title"> --- Title --- </h1>
            <div className="vertical-menu">
                <Link className="menu-link" to="/story">
                    <button className="menu-button">Start</button>
                </Link>
                <button className="menu-button">Local Load</button>
                <button className="menu-button">Online Load</button>
                <button className="menu-button">Options</button>
                <Link className="menu-link" to="/about">
                    <button className="menu-button">About</button>
                </Link>
                <button className="menu-button">Exit</button>
            </div>
            <p>Test</p>
        </div>
    );
}
