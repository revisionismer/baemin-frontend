import React, { useEffect, useState } from 'react';
import { Link, Navigate, json, useLocation, useNavigate, useParams } from 'react-router-dom';

import Nav from '../../components/Nav';

import '../../assets/css/store/detail.css';

import None from '../../assets/img/none.gif';
import ModalCart from './ModalCart';

import { Map } from 'react-kakao-maps-sdk';

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

    useEffect(() => {
        document.querySelector(".cart_main > ul.menu").addEventListener('click', (e) => {
            console.log(e.target.textContent);

            const deliveryModal = document.querySelector(".modal");

            console.log(deliveryModal);

            deliveryModal.classList.toggle('show');

        })

    })

    // 2025-01-17 : 카카오맵 API 띄우기 성공, 다음에는 현재 위도,경도 가지고 와서 현재 위치 뿌려주는걸로 변경하는 작업 필요
    // 참고 : kakao에서 403에러가 뜰땐 카카오 개발자 사이트에서 카카오맵 탭에 들어가 활성화를 시켜줘야 통신이 가능하다.
    useEffect(() => {
        var container = document.getElementById("map");
        var options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.54, 126.96), //지도의 중심좌표. 서울 한가운데
            level: 3, //지도의 레벨(확대, 축소 정도) 3에서 8레벨로 확대
        };

        var map = new kakao.maps.Map(container, options);

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
                <div id='cart_detail'>
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
                                        <h2>양념 치킨</h2> 13,000원
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
                                        <h2>반반 치킨</h2> 14,000원
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
                            <li>
                                <div>
                                    <h2>찾아 오시는 길</h2>

                                    <div id="map_box">
                                        <div id='map' style={{ width: "100%", height: "400px" }}></div>
                                        <div id="position_box">
                                            <button className="storePosition" ><i className="far fa-dot-circle"></i> 가게 위치로</button>
                                            <button className="userPosition"> <i className="far fa-dot-circle"></i> 내 위치로</button>
                                        </div>
                                    </div>

                                    <h2>위치안내</h2>
                                    <div id="store_address">가게 주소</div>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h2>가게 소개</h2>
                                    <div>가게 소개 내용</div>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h2>영업 정보</h2>

                                    <div className="info_detail_title">
                                        <div>상호명</div>
                                        <div>영업시간</div>
                                        <div>전화번호</div>

                                    </div>

                                    <div className="info_detail">
                                        <div>매장 이름</div>
                                        <div>
                                            <span>시 ~</span>
                                            <span>시 </span>
                                        </div>
                                        <div></div>

                                    </div>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h2>가계 통계</h2>
                                    <div className="info_detail_title">
                                        <div>최근 주문수</div>
                                        <div>전체 리뷰 수</div>
                                        <div>찜</div>
                                    </div>

                                    <div className="info_detail">

                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="comment" >
                            코멘트
                        </ul>
                    </div>
                </div>
            </div>
            <Nav></Nav>
            <ModalCart></ModalCart>

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