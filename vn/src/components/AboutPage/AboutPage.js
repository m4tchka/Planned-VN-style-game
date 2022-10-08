import { Link } from "react-router-dom";
import "./AboutPage.css";
export default function AboutPage() {
    return (
        <div className="about-page">
            <h1 className="about-header">About</h1>
            <div className="about-body">
                <p className="about-content">
                    Welcome to react-visual-novel !{"\n"}This is the about page
                    (work in progress)
                </p>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
}
