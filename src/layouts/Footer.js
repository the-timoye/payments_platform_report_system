import React from "react";
import { Circle } from "../components";

export const Footer = () => {
    return (
        <footer className="footer">
            <Circle size={"footer"} />
            <p>
                Designed and Developed by <a href='https://thetimoye.netlify.app'>thetimoye</a>
            </p>
        </footer>
    )
}