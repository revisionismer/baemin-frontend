import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/header.css';

import Baemin from '../assets/img/baemin.jpg';

const Header = () => {
    return (
        <>
            <div id="header">
                <Link to="/"><img src={Baemin} alt="이미지"></img></Link>

                <div className="admin_page_btn">
                    <div>
                        <Link to="/admin/main">사장님 페이지</Link>
                    </div>
                </div>

                <div className="menu_tab_box active">
                    <div className="menu_tab">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;