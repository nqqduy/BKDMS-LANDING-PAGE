import React from 'react';
import FeatureDetail from '../Feature/FeatureDetail';
import sale from '../../assets/images/sale.png';

export default function Sales() {
    return (
        <div className="sales">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 className="productCms__item">
                            Ứng dụng cho nhân viên thị trường BK Sales
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 ">
                        <img
                            src={sale}
                            alt="nhà phân phối hàng đầu việt nam"
                            width=""
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="cmsDetails">
                            <FeatureDetail info="Chấm công, nghỉ phép, xem lịch sử làm việc" />
                            <FeatureDetail info="Xem danh sách cửa hàng theo tuyến và phạm vi" />
                            <FeatureDetail info="Hỗ trợ quy trình viếng thăm khách hàng" />
                            <FeatureDetail info="Tracking đơn hàng từ nhà phân phối đến đại lý" />
                            <FeatureDetail info="Ghi chú công việc" />
                            <FeatureDetail info="Báo cáo hiệu suất, lịch sử di chuyển" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
