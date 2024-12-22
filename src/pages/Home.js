import React from 'react';
import Nav from '../components/Nav';

import '../assets/css/home.css';

import Pizza2 from '../assets/img/pizza2.png';
import Chicken1 from '../assets/img/chicken1.png';
import Hamburger4 from '../assets/img/hamburger4.png';
import Bunsik1 from '../assets/img/bunsik1.png';
import Dessert2 from '../assets/img/dessert2.png';
import Cutlet1 from '../assets/img/cutlet1.png';
import Chinese1 from '../assets/img/chinese1.png';
import Jockbal1 from '../assets/img/jockbal1.png';
import Jockbal2 from '../assets/img/jockbal2.png';
import Bibimbap from '../assets/img/bibimbap.jpg';
import Cutlet3 from '../assets/img/cutlet3.png';
import Dosirac from '../assets/img/dosirac.jpg';

// 2024-12-22 : 여기까지
const Home = () => {
    return (
        <>
            <div id='main'>
                <section className='address_search'>
                    <div id='searchbox'>
                        <div>
                            <input type='hidden' id='zipCode' placeholder='우편번호'></input>
                            <input type='text' id='address' placeholder='주소를 입력해주세요.'></input><br />
                        </div>

                        <div className="search_btn">

                            <label htmlFor="search_btn">
                                <i className="fas fa-search"></i>
                            </label>

                            <input type="button" name="search" id="search_btn" />

                        </div>
                    </div>
                </section>
                <section className="category_box">
                    <div className="box">
                        <ul className="category">
                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Pizza2} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">피자</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Chicken1} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">치킨</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Hamburger4} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">패스트푸드</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Bunsik1} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">분식</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Dessert2} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">카페/디저트</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Cutlet1} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">돈까스/일식</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Chinese1} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">중국집</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Jockbal1} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">족발/보쌈</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Jockbal2} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">야식</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Bibimbap} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">한식</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Cutlet3} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">1인분</div>
                            </li>

                            <li>
                                <div>
                                    <div className="img_box">
                                        <img src={Dosirac} alt="이미지" />
                                    </div>
                                </div>
                                <div className="name">도시락</div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <Nav></Nav>
        </>
    );
};

export default Home;