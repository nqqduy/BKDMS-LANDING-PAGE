import React from 'react';
import { Link } from 'react-router-dom';
import imgCms from '../../assets/images/logoDMS.png';
import imgFooter from '../../assets/images/banquyen.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 push-2">
                        <div className="footer__logo">
                            <img src={imgCms} alt="" width="50px" />
                            <p className="footer__title">BK DMS</p>
                        </div>
                        <p className="footer__des">
                            Sáng lập bởi 2 chàng sinh viên Bách Khoa TP.HCM và
                            giảng viên hướng dẫn THS. Trần Thị Quế Nguyệt
                        </p>
                        <div className="footer__icon">
                            <a
                                href="https://www.facebook.com/BachKhoaDMS/"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f icon--social"></i>
                            </a>
                        </div>
                        <p className="footer__license">
                            ©2021 BKDMS. All rights reserved
                        </p>
                        <img src={imgFooter} alt="" />
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            {/* <div className="col-lg-3 offset-1">
                                <h4 className="footer__title footer__title--item">
                                    Sản phẩm
                                </h4>
                                <Link className="footer__item" to="/">
                                    BK CMS
                                </Link>
                                <Link className="footer__item" to="/">
                                    BK Agency
                                </Link>
                                <Link className="footer__item" to="/">
                                    BK Sales
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <h4 className="footer__title footer__title--item">
                                    Tham khảo
                                </h4>
                                <Link className="footer__item" to="/">
                                    Giới thiệu
                                </Link>
                                <Link className="footer__item" to="/">
                                    Bảng giá
                                </Link>
                                <Link className="footer__item" to="/">
                                    FAQ
                                </Link>
                                <Link className="footer__item" to="/">
                                    Chính sách bảo mật
                                </Link>
                            </div> */}
                            <div className="col-lg-12">
                                <h4 className="footer__title footer__title--item">
                                    Liên hệ
                                </h4>
                                <div className="footer__item--contact">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>
                                        Khu công nghệ phần mềm ĐHQG, Linh Trung,
                                        Thủ Đức, TPHCM
                                    </p>
                                </div>
                                <div className="footer__item--contact">
                                    <i className="fas fa-home"></i>{' '}
                                    <Link
                                        to="/"
                                        style={{
                                            paddingLeft: '10px',
                                            color: '#4f5665',
                                        }}
                                    >
                                        https://fe-bkdms.herokuapp.com
                                    </Link>
                                </div>

                                <div className="footer__item--contact">
                                    <i className="far fa-envelope"></i>
                                    <a
                                        style={{
                                            paddingLeft: '10px',
                                            color: '#4f5665',
                                        }}
                                        href="mailto:bkdms2022@gmail.com"
                                    >
                                        bkdms2022@gmail.com
                                    </a>
                                </div>
                                <div className="footer__item--contact">
                                    <i className="fas fa-phone-square-alt"></i>
                                    <a
                                        href="tel:+0987438140"
                                        style={{
                                            paddingLeft: '10px',
                                            color: '#4f5665',
                                        }}
                                    >
                                        0987 438 140
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <FooterDetails /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
