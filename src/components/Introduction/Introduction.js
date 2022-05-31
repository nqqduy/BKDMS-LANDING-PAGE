import React from 'react';
import intro from '../../assets/images/DMS-phanphoi.png';
import Button from '../Button/Button';

export default function Introduction() {
    const handleRegister = () => {
        window.location.href = process.env.REACT_APP_CLIENT_URL;
    };
    //1
    return (
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="intro__title">
                            Bạn muốn một quy trình cung ứng đột phá cùng{' '}
                            <strong style={{ color: '#0d6efd' }}>BK DMS</strong>
                        </h1>
                        <p className="intro__desc">
                            Chúng tôi cung cấp giải pháp quản lý phân phối
                            chuyên nghiệp bằng công nghệ hiện đại nhất trên thị
                            trường hiện nay. Áp dụng chuyển đổi số để mang lại
                            hiệu quả kinh tế cao nhất cho doanh nghiệp của bạn.
                        </p>
                        <Button
                            name="btn btn-primary intro__btn"
                            title="Dùng thử ngay"
                            handleFunction={handleRegister}
                        />
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            src={intro}
                            className="intro__img"
                            alt="Hệ thống phân phối"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
