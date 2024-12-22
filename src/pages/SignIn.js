import React from 'react';

import Baemin2 from '../assets/img/baemin2.png';

import '../assets/css/auth/signin.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div id='main'>
            <div className="login_box">
                <a href="/"><img src={Baemin2} alt="이미지" class="bm_img" /></a>

                <form id='signinForm'>

                    <div className="input_aera">
                        <input type="text" name="username" value="" required placeholder="아이디를 입력해주세요" maxlength="30" />
                    </div>
                    <div className="input_aera">
                        <input type="password" name="password" value="" required placeholder="비밀번호를 입력해 주세요" maxlength="30" />
                    </div>

                    <input type="button" value="로그인" className="login_btn" />

                    <div className="box">

                        <div className="continue_login">
                            <label htmlFor="continue_login">
                                <span>로그인 유지하기</span>
                                <input type="checkbox" id="continue_login" name="remember-me" />
                                <i className="fas fa-check-square"></i>
                            </label>
                        </div>

                        <div>
                            <span className="id_search"><Link>아이디</Link></span>
                            <span> ㅣ </span>
                            <span><Link>비밀번호 찾기</Link></span>
                        </div>
                    </div>
                </form>

                <div id="oauth_login">
                    <div>
                        <Link to="/oauth2/authorization/kakao"></Link>
                    </div>

                    <div>
                        <Link to="/oauth2/authorization/naver"></Link>
                    </div>

                    <div>
                        <Link to="/oauth2/authorization/google"></Link>
                    </div>
                </div>

                <div className="join">
                    <Link to="/signup" >회원 가입하러 가기</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;