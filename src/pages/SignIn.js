import React, { useEffect, useState } from 'react';

import Baemin2 from '../assets/img/baemin2.png';

import '../assets/css/auth/signin.css';
import { Link, Navigate, json, useLocation, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';


import imgTitle from '../assets/img/img-title.png';

const SignIn = () => {

    const navigate = useNavigate();

    var ACCESS_TOKEN = "";

    function login() {
        const username = document.getElementById('input-login-username').value;
        const password = document.getElementById('input-login-password').value;

        var loginObject = {
            username: username,
            password: password
        }

        console.log(loginObject)

        axios.post('/login',
            // 1-1. 첫번째 인자 값 : 서버로 보낼 데이터
            JSON.stringify(loginObject),
            // 1-2. 두번째 인자값 : headers 에 세팅할 값들 ex) content-type, media 방식 등
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            }
        ).then(function (res) {
            console.log(res);

            // 1-3. response에서 가져온 값을 string으로 만들기 위해 앞에 "" 붙임
            var responseHeader = "" + res.headers.get('authorization');

            ACCESS_TOKEN = responseHeader.substring(7);

            console.log("엑세스 토큰 : " + ACCESS_TOKEN);

            navigate("/home");

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

    // 2024-12-24 : 로그인 페이지 마크업
    useEffect(() => {

        const loginIdInput = document.querySelector('#input-login-username');
        const loginPwInput = document.querySelector('#input-login-password');
        const loginIdSpan = document.querySelector('#span-login-username');
        const loginPwSpan = document.querySelector('#span-login-password');

        loginIdInput.addEventListener('click', () => {
            loginIdInput.classList.toggle('isTyping');

        });

        loginIdInput.addEventListener('focusout', () => {
            loginIdInput.classList.remove('isTyping');

            if (loginIdInput.value) {
                loginIdSpan.style.display = 'none';
            } else {
                loginIdSpan.style.display = 'block';
            }

        })

        loginPwInput.addEventListener('focusout', () => {
            loginPwInput.classList.remove('isTyping');

            if (loginPwInput.value) {
                loginPwSpan.style.display = 'none';
            } else {
                loginPwSpan.style.display = 'block';
            }
        })


        // 회원 가입 버튼 누르면 페이지 이동
        const signupBtn = document.querySelector('.btn-signup-login');

        signupBtn.addEventListener('click', () => {
            location.href = "/signup";
        })


    });



    return (
        <div className='wrapper'>
            <img className='title-logo' src={imgTitle} alt='배달의 민족' />
            <p className='title-description'>
                배달의민족 앱 아이디로
                <br />
                모든 서비스를 이용할 수 있어요.
            </p>
            <form id='login-form'>
                <label className="login-input-container">
                    <span id='span-login-username'>아이디 또는 이메일</span>
                    <input type="text" id="input-login-username" placeholder="" />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-password'>비밀번호</span>
                    <input type="password" id="input-login-password" placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>
                <button type="button" id="button-login" className="login-button" disabled="" onClick={() => login()}>로그인</button>
            </form>

            <div className="signup-login-container">
                <button type="button" className="btn-signup-login">
                    회원 가입
                </button>
            </div>
            <div className="sns-login-container">
                <strong className="sns-login-title">
                    <span>
                        SNS 계정으로 로그인
                    </span>
                </strong>
                <ul className="sns-login-list">
                    <li>
                        <button className="btn-sns-login btn-kakao-login" aria-label="카카오 로그인">
                            <i className="icon-sns icon-kakao"></i>
                        </button>
                    </li>
                    <li>
                        <button className="btn-sns-login" id="naverIdLogin_loginButton" aria-label="네이버 로그인">
                            <i className="icon-sns icon-naver"></i>
                        </button>
                    </li>
                    <li>
                        <button className="btn-sns-login btn-facebook-login" aria-label="facebook 로그인">
                            <i className="icon-sns icon-facebook"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <p className="corp">© Woowa Brothers Corp.</p>

        </div>
    );
};

export default SignIn;