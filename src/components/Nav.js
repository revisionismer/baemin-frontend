import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/layout/nav.css';

const Nav = () => {
    return (
        <>
            <div id='nav'>
                <ul>
                    <li><Link to="/home"></Link></li>
                    <li><Link to="/store"></Link></li>
                    <li><Link to="/likes"></Link></li>
                    <li><Link to="/order/orderList"></Link></li>
                    <li><Link to="/user/myPage"></Link></li>
                </ul>
            </div>
        </>
    );
};

export default Nav;