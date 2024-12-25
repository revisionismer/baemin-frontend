import React, { useEffect, useState } from 'react';

import imgTitle from '../assets/img/img-title.png';

const SignUp = () => {
    useEffect(() => {

        const joinIdInput = document.querySelector('#input-login-id');
        const joinPwInput = document.querySelector('#input-login-password');
        const joinPwChkInput = document.querySelector('#input-login-password-chk');

        const joinIdSpan = document.querySelector('#span-login-id');
        const joinPwSpan = document.querySelector('#span-login-password');
        const joinPwChkSpan = document.querySelector('#span-login-password-chk');


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

        // 회원 가입 버튼 누르면 페이지 이동
        const cancelBtn = document.querySelector('.cancel-button');

        cancelBtn.addEventListener('click', () => {
            location.href = "/signin";
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
                    <span id='span-login-id'>아이디 또는 이메일</span>
                    <input type="text" id="input-login-id" placeholder="" />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-password'>비밀번호</span>
                    <input type="password" id="input-login-password" placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <label className="login-input-container">
                    <span id='span-login-password-chk'>비밀번호 확인</span>
                    <input type="password" id="input-login-password-chk" placeholder="" autoComplete='on' />
                    <i className="icon-cancel"></i>
                </label>

                <button type="button" id="button-login" className="login-button" disabled="">가입하기</button>
                <button type="button" id="button-cancel" className="cancel-button" disabled="">취소하기</button>
            </form>

            <p className="corp">© Woowa Brothers Corp.</p>

        </div>
    );
};

export default SignUp;