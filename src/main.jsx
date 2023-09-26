import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CV from "./pages/CV";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path="cv" element={<CV />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
