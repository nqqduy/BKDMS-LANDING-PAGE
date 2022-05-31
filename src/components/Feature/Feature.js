import React from 'react';
import imgFeature from '../../assets/images/huuich.png';
import FeatureDetail from './FeatureDetail';

export default function Feature() {
    return (
        <div className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src={imgFeature}
                            alt="DMS - nhà phân phối"
                            className="feature__img"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="feature__title">
                            Vô vàn tính năng hữu ích
                        </h1>
                        <p className="feature__des">
                            Tự động hóa quy trình phân phối sản phẩm. Doanh
                            nghiệp không cần phải sử dụng sổ sách hay giấy tờ
                        </p>

                        <FeatureDetail info="3 in 1. Ba ứng dụng cho một nhà phân phối" />
                        <FeatureDetail info="Giao diện ứng dụng hiện đại, dễ sử dụng" />
                        <FeatureDetail info="Dễ dàng quản lý hoạt động của nhân viên thị trường " />
                        <FeatureDetail info="Tương tác trực tiếp giữa đại lý và nhà phân phối" />
                        <FeatureDetail info="Hệ thống bảo mật và ổn định" />
                    </div>
                </div>
            </div>
        </div>
    );
}
