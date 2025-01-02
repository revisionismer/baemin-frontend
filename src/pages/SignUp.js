import React, { useEffect, useState } from 'react';

import imgTitle from '../assets/img/img-title.png';

import { Link, Navigate, json, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const joinIdInput = document.querySelector('#input-login-username');
        const joinPwInput = document.querySelector('#input-login-password');
        const joinPwChkInput = document.querySelector('#input-login-password_chk');
        const joinNameInput = document.querySelector('#input-login-name');
        const joinPhoneInput = document.querySelector('#input-login-phone');

        const joinIdSpan = document.querySelector('#span-login-username');
        const joinPwSpan = document.querySelector('#span-login-password');
        const joinPwChkSpan = document.querySelector('#span-login-password_chk');
        const joinNameSpan = document.querySelector('#span-login-name');
        const joinPhoneSpan = document.querySelector('#span-login-phone');

        joinIdInput.addEventListener('click', () => {
            joinIdInput.classList.toggle('isTyping');

        });

        joinIdInput.addEventListener('focusout', () => {
            joinIdInput.classList.remove('isTyping');

            if (joinIdInput.value) {
                joinIdSpan.style.display = 'none';
            } else {
                joinIdSpan.style.display = 'block';
            }

        })

        joinPwInput.addEventListener('click', () => {
            joinPwInput.classList.toggle('isTyping');

        });

        joinPwInput.addEventListener('focusout', () => {
            joinPwInput.classList.remove('isTyping');

            if (joinPwInput.value) {
                joinPwSpan.style.display = 'none';
            } else {
                joinPwSpan.style.display = 'block';
            }
        })

        joinPwChkInput.addEventListener('click', () => {
            joinPwChkInput.classList.toggle('isTyping');

        });

        joinPwChkInput.addEventListener('focusout', () => {
            joinPwChkInput.classList.remove('isTyping');

            if (joinPwChkInput.value) {
                joinPwChkSpan.style.display = 'none';
            } else {
                joinPwChkSpan.style.display = 'block';
            }
        })

        joinNameInput.addEventListener('click', () => {
            joinNameInput.classList.toggle('isTyping');

        });

        joinNameInput.addEventListener('focusout', () => {
            joinNameInput.classList.remove('isTyping');

            if (joinNameInput.value) {
                joinNameSpan.style.display = 'none';
            } else {
                joinNameSpan.style.display = 'block';
            }
        })

        joinPhoneInput.addEventListener('click', () => {
            joinPhoneInput.classList.toggle('isTyping');

        });

        joinPhoneInput.addEventListener('focusout', () => {
            joinPhoneInput.classList.remove('isTyping');

            if (joinPhoneInput.value) {
                joinPhoneSpan.style.display = 'none';
            } else {
                joinPhoneSpan.style.display = 'block';
            }
        })


        // 회원 가입 버튼 누르면 페이지 이동
        const cancelBtn = document.querySelector('.cancel-button');

        cancelBtn.addEventListener('click', () => {
            location.href = "/signin";
        })


    });

    function signUp() {

        const username = document.getElementById('input-login-username').value;
        const password = document.getElementById('input-login-password').value;
        const password_chk = document.getElementById('input-login-password_chk').value;
        const name = document.getElementById('input-login-name').value;
        const phone = document.getElementById('input-login-phone').value;

        // 1-5. 이메일 형식 체크 정규식
        const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

        if (!email_regex.test(username)) {
            alert("이메일 형식에 맞지 않습니다.");
            document.getElementById("input-login-username").focus();
            return false;
        }

        if (password !== password_chk) {
            alert("비밀번호가 서로 다릅니다.");
            document.getElementById("input-login-password").value = '';
            document.getElementById("input-login-password_chk").value = '';
            document.getElementById("input-login-password").focus();
            return false;
        }

        if (name === '') {
            alert("이름은 비어있을 수 없습니다.");
            document.getElementById("input-login-name").focus();
            return false;
        }

        if (phone === '') {
            alert("전화번호는 비어있을 수 없습니다.");
            document.getElementById("input-login-phone").focus();
            return false;
        }

        var signUpObject = {
            username: username,
            password: password,
            name: name,
            phone: phone
        }

        console.log(signUpObject);

        axios.post('/api/auth/join',
            // 1-1. 첫번째 인자 값 : 서버로 보낼 데이터
            JSON.stringify(signUpObject),
            // 1-2. 두번째 인자값 : headers 에 세팅할 값들 ex) content-type, media 방식 등
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            }
            // 1-3. 성공
        ).then(function (res) {
            console.log(res);
            alert(res.data.message);

            navigate("/signin");

            // 1-4. 실패
        }).catch(function (res) {
            console.log(res);
            if (res.response.status === 500) {
                alert(res.response.statusText);
                return;
            }

            if (res.response.data.message === '중복된 아이디입니다.') {
                alert(res.response.data.message);

                document.getElementById("span-login-username").style.display = 'block';
                document.getElementById("span-login-password").style.display = 'block';
                document.getElementById("span-login-password_chk").style.display = 'block';
                document.getElementById("span-login-name").style.display = 'block';
                document.getElementById("span-login-phone").style.display = 'block';

                document.getElementById("input-login-username").value = '';
                document.getElementById("input-login-password").value = '';
                document.getElementById("input-login-password_chk").value = '';
                document.getElementById("input-login-name").value = '';
                document.getElementById("input-login-phone").value = '';

                return;
            }

            if (res.data.username === "이메일 형식으로 적어주세요.") {
                alert(res.data.username);
                document.getElementById("span-login-username").style.display = 'block';
                document.getElementById("input-login-username").value = '';
                return;
            }


        })
    }

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
                    <span id='span-login-username'>이메일 형식의 아이디</span>
                    <input type="text" id="input-login-username" name='input-login-username' placeholder="" />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-password'>비밀번호</span>
                    <input type="password" id="input-login-password" name='input-login-password' placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-password_chk'>비밀번호 확인</span>
                    <input type="password" id="input-login-password_chk" name='input-login-password_chk' placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-name'>이름</span>
                    <input type="text" id="input-login-name" name='input-login-name' placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-phone'>전화번호</span>
                    <input type="text" id="input-login-phone" name='input-login-phone' placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <button type="button" id="button-login" className="login-button" disabled="" onClick={() => signUp()}>가입하기</button>
                <button type="button" id="button-cancel" className="cancel-button" disabled="">취소하기</button>
            </form>

            <p className="corp">© Woowa Brothers Corp.</p>

        </div>
    );
};

export default SignUp;