import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='about'>
                    <li>About</li>
                    </Link>
                    {/* <Link>
                    <li>Kudds</li>
                    </Link> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;