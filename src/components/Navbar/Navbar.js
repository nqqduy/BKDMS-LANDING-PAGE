import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoDMS from '../../assets/images/logoDMS.png';

export default function Navbar() {
    const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () =>
            setHeaderActive(window.scrollY >= 50)
        );
        return () => {
            window.removeEventListener('scroll', () =>
                setHeaderActive(window.scrollY >= 50)
            );
        };
    }, []);
    return (
        <nav className={headerActive ? `headerActive header` : `header`}>
            <Link to="/">
                <img
                    src={logoDMS}
                    alt="DMS - Hệ thống phân phối"
                    className="header__img"
                />

                <span className="header__title">BK DMS</span>
            </Link>
            {/* <div className="menu-icon" onClick={() => setClick(!click)}>
                    <i className={click ? 'fa fa-times' : 'fas fa-bars'}></i>
                </div> */}
            {/* <ul className="nav-menu">
                <li className="header__nav-item">
                    <a href="" className="nav-links">
                        Dùng thử ngay
                    </a>
                </li>
            </ul> */}
        </nav>
    );
}
