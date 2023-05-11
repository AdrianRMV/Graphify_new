import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

function Main() {
    return (
        <>
            <Header />
        </>
    );
}

export default Main;

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<Main />);
}
