import React from 'react';

import None from '../../assets/img/none.gif';

import '../../assets/css/modal.css';

const ModalCart = () => {
    return (
        <>
            <div className='modal'>
                <div id="modal_bg"></div>
                <div className="food_modal modal"></div>
                <div id="modal_header">
                    <button type="button" className="closeA"><i className="fas fa-times"></i></button>
                    <h1>메뉴 상세</h1>
                </div>
                <div className="modal_box" >
                    <div className='img_box'>
                        <img src={None} alt="이미지" className="menu_img" />
                        <div className='menu_info'>
                            <h2 className="menu_name">메뉴 이름</h2>
                            <div className="menu_dec">메뉴 상세설명</div>
                        </div>
                        <div className="price"><span>가격 : </span><span className="menu_price" >0</span></div>
                        <div id='option'>
                            <h2>옵션 선택</h2>
                            <ul>
                                <li>
                                    <div className="option_box">
                                        <span>
                                            <i className="fas fa-check-square"></i>
                                            <input type="checkbox" className="menu_option" name="option" value="123"></input>
                                            <input type="hidden" className="option_price" value=""></input>
                                            <input type="hidden" className="option_num" value=""></input>
                                        </span>
                                        <span>0원</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="option_box">
                                        <span>
                                            <i className="fas fa-check-square"></i>
                                            <input type="checkbox" className="menu_option" name="option" value="123"></input>
                                            <input type="hidden" className="option_price" value=""></input>
                                            <input type="hidden" className="option_num" value=""></input>
                                        </span>
                                        <span>0원</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="amount">
                            <span className="amount_text">수량</span>

                            <span className="amount_box">
                                <button className="plus">+</button>
                                <input type="number" id="amount" min="1" value="1" readOnly />
                                <button className="minus">-</button>
                            </span>

                        </div>
                    </div>
                </div>
                <div id="btn_box">
                    <input type="hidden" className="add_cart_food_name" />
                    <input type="hidden" className="add_cart_food_price" />
                    <input type="hidden" className="add_cart_food_id" />
                    <div className='modal_content'>
                        <div className="min_delevery">배달최소주문금액 : 10000원 </div>
                        <div className="sum"><span>총 주문금액 : </span><span className="total_price">0</span></div>
                    </div>

                    <button className="closeB" type="button">취소</button>
                    <button className="add_cart" type="button">장바구니에 담기 </button>
                </div>
            </div>
        </>
    );
};

export default ModalCart;