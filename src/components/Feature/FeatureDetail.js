import React from 'react';

export default function FeatureDetail({ info }) {
    return (
        <div className="feature__detail">
            <div className="feature__detail--item">
                <span className="icon-check">
                    <i className="fas fa-check"></i>
                </span>
                <p className="feature__detail--des">{info}</p>
            </div>
        </div>
    );
}
