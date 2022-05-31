import React from 'react';

export default function NumberDetail({ numberReg, icon, info }) {
    return (
        <div className="col-lg-4 text-center">
            <div className="numberDetail">
                <div className="numberDetail__icon">
                    <i className={`icon ${icon}`}></i>
                </div>
                <div className="numberDetail__info">
                    <h2>{numberReg}</h2>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
}
