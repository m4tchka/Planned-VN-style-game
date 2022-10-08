import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import MainMenu from "./components/MainMenu/MainMenu";
import AboutPage from "./components/AboutPage/AboutPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
//TODO: Add ending page AND CUSTOM STATES 
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<MainMenu />} />
                <Route path="story" element={<App />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="ending" element={<EndPage />} /> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
