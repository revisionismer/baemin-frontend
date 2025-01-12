import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import '../../assets/css/store/store.css';
import '../../assets/css/store/store-li.css';

import Temp2 from '../../assets/img/temp2.png';
import None from '../../assets/img/none.gif';

import DominoPizza from '../../assets/img/dominopizza.jpg';
import PizzaHut from '../../assets/img/pizzahut.jpg';
import MrPizza from '../../assets/img/mrpizza.jpg';
import PizzaMaru from '../../assets/img/pizzamaru.jpg';

import { Link } from 'react-router-dom';

const Store = () => {
    // 1-1.
    const [userFullAddress, setFullAddress] = useState("");

    // 1-2.
    const [userZoneCode, setUserZoneCode] = useState("");

    return (
        <>
            <div id='main'>
                <div className="container">
                    <div className="category">
                        <ul>
                            <li data-category='100'><span>피자</span></li>
                            <li data-category='101'><span>치킨</span></li>
                            <li data-category='102'><span>패스트푸드</span></li>
                            <li data-category='103'><span>분식</span></li>
                            <li data-category='104'><span>카페/디저트</span></li>
                            <li data-category='105'><span>돈까스/일식</span></li>
                            <li data-category='106'><span>중국집</span></li>
                            <li data-category='107'><span>족발/보쌈</span></li>
                            <li data-category='108'><span>야식</span></li>
                            <li data-category='109'><span>한식</span></li>
                            <li data-category='110'><span>1인분</span></li>
                            <li data-category='111'><span>도시락</span></li>
                        </ul>
                    </div>

                    <input type='hidden' id='zoneCode' placeholder='우편번호' defaultValue={userZoneCode} required></input>
                    <input type='hidden' id='fullAddress' placeholder='주소를 입력해주세요.' defaultValue={userFullAddress} required></input>

                    <div className="option">
                        <ul>
                            <li data-sort="기본순">기본순</li>
                            <li data-sort="배달 빠른 순">배달 빠른 순</li>
                            <li data-sort="배달팁 낮은 순">배달팁 낮은 순</li>
                            <li data-sort="별점 높은 순">별점 높은 순</li>
                            <li data-sort="리뷰 많은 순">리뷰 많은 순</li>
                            <li data-sort="최소 주문 금액 순">최소 주문 금액 순</li>
                        </ul>
                    </div>

                    <div className="box">
                        <img className="temp_img" alt="이미지" src={Temp2} />

                        <ul className="store">
                            <li>
                                <div className="img_box">
                                    <Link to={'/store/1/detail'}><img src={DominoPizza} /></Link>
                                </div>
                                <div className="info_box">
                                    <h2><Link to={'/store/1/detail'}>도미노피자</Link></h2>
                                    <br />
                                    <Link>
                                        <span>
                                            <span>최소주문금액 : 10000원, </span>
                                            <span>배달팁 : 3000원</span>
                                        </span>
                                        <span>배달시간 : 60분</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="img_box">
                                    <Link to={'/store/2/detail'}><img src={MrPizza} /></Link>
                                </div>
                                <div className="info_box">
                                    <h2><Link to={'/store/2/detail'}>미스터피자</Link></h2>
                                    <br />
                                    <Link>
                                        <span>
                                            <span>최소주문금액 : 10000원, </span>
                                            <span>배달팁 : 3000원</span>
                                        </span>
                                        <span>배달시간 : 60분</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="img_box">
                                    <Link to={'/store/3/detail'}><img src={PizzaHut} /></Link>
                                </div>
                                <div className="info_box">
                                    <h2><Link to={'/store/3/detail'}>피자헛</Link></h2>
                                    <br />
                                    <Link>
                                        <span>
                                            <span>최소주문금액 : 10000원, </span>
                                            <span>배달팁 : 3000원</span>
                                        </span>
                                        <span>배달시간 : 60분</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="img_box">
                                    <Link to={'/store/4/detail'}><img src={PizzaMaru} /></Link>
                                </div>
                                <div className="info_box">
                                    <h2><Link to={'/store/4/detail'}>피자마루</Link></h2>
                                    <br />
                                    <Link>
                                        <span>
                                            <span>최소주문금액 : 10000원, </span>
                                            <span>배달팁 : 3000원</span>
                                        </span>
                                        <span>배달시간 : 60분</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="img_box">
                                    <Link><img src={None} /></Link>
                                </div>
                                <div className="info_box">
                                    <h2><Link>기본값</Link></h2>
                                    <br />
                                    <Link>
                                        <span>
                                            <span>최소주문금액 : 0원, </span>
                                            <span>배달팁 : 0원</span>
                                        </span>
                                        <span>배달시간 : 0분</span>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
};

export default Store;