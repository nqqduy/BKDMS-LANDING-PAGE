import React from 'react';
import imgCms from '../../assets/images/home.png';
import FeatureDetail from '../Feature/FeatureDetail';

export default function ProductCms() {
    return (
        <div className="productCms">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 className="productCms__title">Sản phẩm</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 className="productCms__item">Hệ quản trị CMS</h1>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={imgCms}
                            alt="nhà phân phối hàng đầu việt nam"
                            width="100%"
                            style={{ paddingTop: '80px' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="cmsDetails">
                            <FeatureDetail info="Quản lý toàn bộ hoạt động phân phối của doanh nghiệp" />
                            <FeatureDetail info="Quản trị hoạt động xuất, nhập, chuyển và kiểm kho" />
                            <FeatureDetail info="Quản lý đơn hàng, cho phép đổi trả đơn hàng" />
                            <FeatureDetail info="Quản lý danh sách đối tác, thêm mới, chỉnh sửa và xóa" />

                            <FeatureDetail info="Quản lý danh mục sản phẩm" />
                            <FeatureDetail info="Báo cáo doanh số sản phẩm, đơn hàng" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
