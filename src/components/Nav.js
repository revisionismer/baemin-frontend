import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css';

const Nav = () => {
    return (
        <div id='nav'>
            <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/store/search"></Link></li>
                <li><Link to="/likes/store"></Link></li>
                <li><Link to="/orderList"></Link></li>
                <li><Link to="/myPage"></Link></li>
            </ul>
        </div>
    );
};

export default Nav;