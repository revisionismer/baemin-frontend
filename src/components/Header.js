import React, { useEffect, useState } from 'react';
import { Link, Navigate, json, useLocation, useNavigate, useParams } from 'react-router-dom';

import Baemin from '../assets/img/baemin.jpg';

import axios from 'axios';

import Base64 from 'base-64';

import '../assets/css/layout/header.css';

import '../assets/fontawesome/css/all.min.css';

const Header = () => {

    const navigate = useNavigate();

    var ACCESS_TOKEN = getCookie('access_token');

    function getCookie(key) {

        let result = null;
        let cookie = document.cookie.split(';');

        cookie.some(function (item) {
            item = item.replace(' ', '');

            let dic = item.split('=');

            if (key === dic[0]) {
                result = dic[1];
                return true;
            }
            return false;
        });
        return result;
    }

    // 2024-07-17 : base64로 로그인 정보 꺼내오기
    // 2024-07-18 : 토큰이 없다면 서버에서 예외터지도록 변경
    let payload;
    let loginUser;

    if (ACCESS_TOKEN != null) {
        payload = ACCESS_TOKEN.substring(ACCESS_TOKEN.indexOf('.') + 1, ACCESS_TOKEN.lastIndexOf('.'));
        loginUser = JSON.parse(Base64.decode(payload));
    }

    function logout() {

        axios.get('/api/auth/logout',
            // 1-1. 첫번째 인자 값 : 서버로 보낼 데이터
            null,
            // 1-2. 두번째 인자값 : headers 에 세팅할 값들 ex) content-type, media 방식 등
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            }
        ).then(function (res) {
            console.log(res);

            deleteCookie('access_token');

            navigate("/signin");

        }).catch(function (res) {
            console.log(res);
            if (res.response.status === 500) {
                alert(res.response.statusText);
                return;
            }

            alert(res.response.data.message);
            return;
        })
    }

    function deleteCookie(key) {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    useEffect(() => {
        const menuTabBox = document.querySelector('.menu_tab_box');
        const menu = document.querySelector('#menu');

        menuTabBox.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }, []);

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
                        <div><Link to="/admin/myStore">운영중인가게</Link></div>
                        <div><Link to="/admin/main">주문접수</Link></div>
                        <div><Link to="/admin/storeManagement">매장 관리</Link></div>
                        <div><Link to="/admin/salesManagement">매출 확인</Link></div>
                        <div><Link to="/admin/myStore">운영중인가게</Link></div>
                        <div><Link to="/home">홈으로</Link></div>
                        {ACCESS_TOKEN ? <div><Link onClick={() => logout()}>로그아웃</Link></div> : ''}
                    </div>
                </div>
                <div id="menu_bg"></div>
            </div>
        </>
    );
};

export default Header;