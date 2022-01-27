import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../layouts';
import { Circle } from '../components';

import hero from "../assets/images/hero.svg";

export const Main = () => {
    return (
        <Hero>
            <div className='intro'>
                <Circle size={'hero'} />
                <h1>
                    <span className="color-primary">Visualize</span> your payments
                    <br />
                    make smarter <span className="color-primary">Business</span> decisions
                </h1>
                <Link to='/get-started' className='button button-primary'>Get Started</Link>
                <Link to='/about' className='button button-secondary mx-large'>Support</Link>
            </div>
            <div className='hero__image'>
                <img src={hero} alt="hero" className='' />
            </div>
        </Hero >
    )
}