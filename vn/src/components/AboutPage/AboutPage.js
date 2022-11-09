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
                <p className="about-content">
                    {"\n"}Frontend made with react{"\n"}Backend made with
                    firebase
                    {"\n"}Hosted on netlify{"\n"}
                </p>
                <h2>Usage: </h2>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
}
/* 
    Frontend made with react
    Backend made with firebase
    Hosted on netlify
*/
