import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Baemin from '../assets/img/baemin.jpg';

import '../assets/css/layout/header.css';

import '../assets/fontawesome/css/all.min.css';

const Header = () => {

    useEffect(() => {
        const menuTabBox = document.querySelector('.menu_tab_box');
        const menu = document.querySelector('#menu');

        menuTabBox.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });

    return (
        <>
            <div id="header">
                <Link to="/"><img src={Baemin} alt="이미지"></img></Link>

                <div className="menu_tab_box">
                    <div className="menu_tab">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                </div>

                <div id="menu">
                    <div className="box">
                        <div><Link href="/admin/myStore">운영중인가게</Link></div>
                        <div><Link href="/admin/main">주문접수</Link></div>
                        <div><Link href="/admin/storeManagement">매장 관리</Link></div>
                        <div><Link href="/admin/salesManagement">매출 확인</Link></div>

                        <div><Link href="/admin/myStore">운영중인가게</Link></div>

                        <div><Link href="/">홈으로</Link></div>
                    </div>
                </div>
                <div id="menu_bg"></div>
            </div>
        </>
    );
};

export default Header;