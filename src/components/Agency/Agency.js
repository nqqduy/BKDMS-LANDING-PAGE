import React from 'react';
import FeatureDetail from '../Feature/FeatureDetail';
import imgAgency from '../../assets/images/homepageMobile.jpg';

export default function Agency() {
    return (
        <div className="agency">
            <div className="container">
                <div className="row text-center">
                    <h1 className="agency_title">
                        Ứng dụng cho đại lý BK Agency
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="agencyDetails">
                            <FeatureDetail info="Tương tác trực tiếp giữa đại lý và nhà phân phối" />
                            <FeatureDetail info="Xem tính năng của sản phẩm, đặt đơn hàng và theo dõi" />
                            <FeatureDetail info="Phản hồi tình hình sản phẩm về nhà phân phối" />
                            <FeatureDetail info="Quản trị hoạt động bán hàng, báo cáo doanh thu" />
                            {/* <FeatureDetail info="Tích điểm khuyến mãi" /> */}
                        </div>
                    </div>
                    <div
                        className="col-lg-6"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            width="40%"
                            src={imgAgency}
                            alt="Hệ thống phân phối cho đại lý"
                            style={{
                                margin: 'auto',
                                paddingTop: '80px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
