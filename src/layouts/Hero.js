import React from "react";
// import PropTypes from 'proptypes';


export const Hero = ({ children }) => {
    return (
        <main className="hero">
            {children}
        </main>
    )
}

Hero.propTypes = {}