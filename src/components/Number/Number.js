import React from 'react';
import NumberDetail from './NumberDetail';

export default function Number() {
    return (
        <div className="number-register">
            <div className="container number number--reg">
                <div className="row">
                    <NumberDetail
                        numberReg="100+"
                        info="Doanh nghiệp"
                        icon="fas fa-user"
                    />
                    <NumberDetail
                        numberReg="30+"
                        info="Tỉnh thành"
                        icon="fas fa-map-marker-alt"
                    />
                    <NumberDetail
                        numberReg="1000+"
                        info="Đại lý, NPP"
                        icon="far fa-building"
                    />
                </div>
            </div>
        </div>
    );
}
