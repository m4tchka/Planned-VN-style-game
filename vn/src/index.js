import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import MainMenu from "./components/MainMenu/MainMenu";
import AboutPage from "./components/AboutPage/AboutPage";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
//TODO: Add ending page AND CUSTOM STATES
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenu />,
    },
    {
        path: "story",
        element: <App />,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
]);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
