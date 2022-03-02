import React from 'react';
import PropTypes from "proptypes";
import { Link } from 'react-router-dom';
import { Hero } from '../layouts';
import { Circle } from '../components';

import hero from "../assets/images/hero.svg";

export const Main = ({ toggleModal }) => {
    return (
        <Hero>
            <div className='intro'>
                <Circle size={'hero'} />
                <h1>
                    <span className="color-primary">Visualize</span> your payments
                    <br />
                    make smarter <span className="color-primary">Business</span> decisions
                </h1>
                <span className='button button-primary' onClick={toggleModal}>Get Started</span>
                <Link to='/about' className='button button-secondary mx-large'>Support</Link>
            </div>
            <div className='hero__image'>
                <img src={hero} alt="hero" />
            </div>
        </Hero >
    )
}

Main.propTypes = {
    toggleModal: PropTypes.func
}