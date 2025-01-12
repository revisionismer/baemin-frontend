import React, { useEffect, useState } from 'react';
import { Link, Navigate, json, useLocation, useNavigate, useParams } from 'react-router-dom';

import Nav from '../../components/Nav';

import '../../assets/css/store/detail.css';
import None from '../../assets/img/none.gif';

// 2025-01-10 : 여기까지

const StoreDetail = () => {

    useEffect(() => {
        // 2025-01-12 : 메뉴 이벤트 처리 완료
        const cartMain = document.querySelector(".cart_main > ul.tab");
        const cartMainMenu = document.querySelector(".cart_main > ul.menu");
        const cartMainInfo = document.querySelector(".cart_main > ul.info");
        const cartMainComment = document.querySelector(".cart_main > ul.comment");

        cartMain.addEventListener('click', (e) => {
            const target = e.target.closest("li");

            if (target && cartMain.contains(target)) {
                const cartMenus = cartMain.querySelectorAll("li");

                cartMenus.forEach(cartMenu => {
                    cartMenu.classList.remove('select');
                })

                target.classList.add("select");

                if (target.textContent === '메뉴') {
                    cartMainMenu.style.display = 'block';
                    cartMainInfo.style.display = 'none';
                    cartMainComment.style.display = 'none';
                } else if (target.textContent === '정보') {

                    cartMainMenu.style.display = 'none';
                    cartMainInfo.style.display = 'block';
                    cartMainComment.style.display = 'none';
                } else if (target.textContent === '리뷰') {
                    cartMainMenu.style.display = 'none';
                    cartMainInfo.style.display = 'none';
                    cartMainComment.style.display = 'block';
                }

            }
        })

    }, []);

    return (
        <>
            <div id='main'>
                <nav>
                    <h1 id="store_name">도미노피자</h1>
                    <div className="inf">
                        <div>
                            <span><i className="fas fa-heart" ></i> 찜 </span>
                            <span className="likes_count">0</span>
                        </div>
                        <div>
                            <span className="store_review_count"> 리뷰 0 </span>
                            <span> 사장님 댓글 0 </span>
                        </div>

                        <div id="min_delevery">최소주문금액 : 10000 원</div>
                        <div>예상 배달시간 : 60 분</div>
                        <div id="delevery_tip">배달팁 : 1000원</div>
                    </div>
                </nav>

                <aside id="cart">
                    <div className="cart">
                        <h2>장바구니</h2>
                        <i className="far fa-trash-alt deleteAll" ></i>

                        <div className="cart_list">
                            <ul>
                                <li></li>
                            </ul>
                        </div>

                        <div className="order_btn_box">
                            <div className="total">장바구니가 비었습니다.</div>
                            <button id='order_btn' className="order_btn">주문하기</button>
                        </div>
                    </div>

                </aside>

                <div className="alarm">장바구니에 담았습니다</div>

                <div className='cart_main'>
                    <div className="offset"></div>
                    <ul className="tab">
                        <li className="select">메뉴</li>
                        <li>정보</li>
                        <li>리뷰</li>
                    </ul>

                    <ul className="menu">
                        <li>
                            <label className="menu_delete_label">
                                <i className="fas fa-check-square" ></i>
                                <input type="checkbox" className="menu_delete_checkbox" name="deleteNumber" value=""></input>
                            </label>

                            <div className="menu_box">
                                <div>
                                    <h2>후라이드 치킨</h2> 11,000원
                                    <input type='hidden' id='storeId' name='storeId' className='store_id' value=""></input>
                                    <input type="hidden" id='foodId' name="foodId" className="food_id" value=""></input>
                                    <input type="hidden" id='foodName' name="foodName" className="food_name" value=""></input>
                                    <input type="hidden" id='foodPrice' name="foodPrice" className="food_price" value=""></input>
                                    <input type="hidden" id='foodDec' name="foodDec" className="food_dec" value=""></input>
                                    <input type="hidden" id='foodImg' name="foodImg" className="food_img" value="" ></input>
                                    <input type="hidden" id='foodThumb' name="foodThumb" className="food_thumb" value=""></input>
                                </div>
                                <div><img src={None} alt="이미지" /></div>
                            </div>
                        </li>
                        <li>
                            <label className="menu_delete_label">
                                <i className="fas fa-check-square" ></i>
                                <input type="checkbox" className="menu_delete_checkbox" name="deleteNumber" value=""></input>
                            </label>

                            <div className="menu_box">
                                <div>
                                    <h2>후라이드 치킨</h2> 11,000원
                                    <input type='hidden' id='storeId' name='storeId' className='store_id' value=""></input>
                                    <input type="hidden" id='foodId' name="foodId" className="food_id" value=""></input>
                                    <input type="hidden" id='foodName' name="foodName" className="food_name" value=""></input>
                                    <input type="hidden" id='foodPrice' name="foodPrice" className="food_price" value=""></input>
                                    <input type="hidden" id='foodDec' name="foodDec" className="food_dec" value=""></input>
                                    <input type="hidden" id='foodImg' name="foodImg" className="food_img" value="" ></input>
                                    <input type="hidden" id='foodThumb' name="foodThumb" className="food_thumb" value=""></input>
                                </div>
                                <div><img src={None} alt="이미지" /></div>
                            </div>
                        </li>
                        <li>
                            <label className="menu_delete_label">
                                <i className="fas fa-check-square" ></i>
                                <input type="checkbox" className="menu_delete_checkbox" name="deleteNumber" value=""></input>
                            </label>

                            <div className="menu_box">
                                <div>
                                    <h2>후라이드 치킨</h2> 11,000원
                                    <input type='hidden' id='storeId' name='storeId' className='store_id' value=""></input>
                                    <input type="hidden" id='foodId' name="foodId" className="food_id" value=""></input>
                                    <input type="hidden" id='foodName' name="foodName" className="food_name" value=""></input>
                                    <input type="hidden" id='foodPrice' name="foodPrice" className="food_price" value=""></input>
                                    <input type="hidden" id='foodDec' name="foodDec" className="food_dec" value=""></input>
                                    <input type="hidden" id='foodImg' name="foodImg" className="food_img" value="" ></input>
                                    <input type="hidden" id='foodThumb' name="foodThumb" className="food_thumb" value=""></input>
                                </div>
                                <div><img src={None} alt="이미지" /></div>
                            </div>
                        </li>
                    </ul>

                    <ul className="info" >
                        정보
                    </ul>

                    <ul className="comment" >
                        코멘트
                    </ul>
                </div>
            </div>
            <Nav></Nav>
            <div className="m_cart_img">
                <div className="m_cart_img_box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="m_cart_count"></span>
                </div>
            </div>
        </>
    );
};

export default StoreDetail;