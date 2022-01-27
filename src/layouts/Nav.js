import React from 'react';
import { Link } from 'react-router-dom';
import { Circle } from '../components/Circle';

export const Nav = () => {
    return (
        <nav className='nav'>
            <Circle size={'nav'} />
            <ul>
                <li>
                    <Link to="/about" className='button button-secondary'> About </Link>
                </li>
                <li>
                    <Link to="/contact" className='button button-primary'> Get In Touch </Link>
                </li>
            </ul>
        </nav>
    )
}