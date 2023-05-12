import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Main() {
    return (
        <div className="flex flex-col h-screen">
            <header>
                <Header />
            </header>
            <main className="flex-grow bg-[#F5F5F5]">
                <MainContent />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Main;

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<Main />);
}
