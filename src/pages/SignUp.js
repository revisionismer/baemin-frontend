import React from 'react';

import Baemin2 from '../assets/img/baemin2.png';

import '../assets/css/auth/signin.css';

const SignUp = () => {
    return (
        <div id='main'>
            <div className="login_box">
                <a href="/"><img src={Baemin2} alt="이미지" className="bm_img" /></a>
                <form id='signupForm'>
                    <div className="input_aera">
                        <input type="text" className="username" name="username" maxlength="20" placeholder="아이디를 입력해 주세요" value="ssar" />
                        <span className="msg_box"></span>
                    </div>

                    <div className="input_aera">
                        <input type="password" className="password1" name="password" maxlength="20" placeholder="비밀번호를 입력해 주세요" value="" />
                    </div>

                    <div className="input_aera">
                        <input type="password" className="password2" maxlength="20" placeholder="비밀번호를 한번더 입력해 주세요" value="" />
                        <span className="msg_box"></span>
                    </div>

                    <div className="input_aera">
                        <input type="text" className="email" name="email" placeholder="이메일을 입력해 주세요" value="ssar@nate.com" />
                        <span className="msg_box"></span>
                    </div>

                    <div className="input_aera">
                        <input type="text" className="nickname" name="nickname" maxlength="20" placeholder="사용하실 닉네임을 입력해 주세요" value="쌀" />
                        <span className="msg_box"></span>
                    </div>

                    <div className="input_aera">
                        <input type="number" name="phone" className="phone" placeholder="'-' 없이 입력해 주세요" maxlength="11" value="" />
                        <span className="msg_box"></span>
                    </div>

                    <input type="button" value="회원가입" className="login_btn" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;