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
                    {"\n"}Frontend made with React{"\n"}Backend made with
                    Firebase (savefiles + auth), Go (chapters API) w/ MongoDB (chapters)
                    {"\n"}Hosted on Netlify{"\n"}Sprites by @NoranekoGames
                </p>
                <h2>Usage: </h2>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
};