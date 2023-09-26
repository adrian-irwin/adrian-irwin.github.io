import React from "react";
import Links from "./components/Links";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="App flex flex-col min-h-screen justify-center items-center text-white text-center">
            <h1 className="text-5xl text-white">adrian</h1>
            <Links />
            <Link to="/cv" className="text-2xl text-white">
                cv
            </Link>
        </div>
    );
}
