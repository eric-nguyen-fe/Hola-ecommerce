import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/Logo-2.png'

const footerAboutLink = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }

]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
       <footer>
           <div className="container">
               <Grid
                   col={4}
                   mdCol={2}
                   smCol={1}
                   gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng<strong>+84 0961664550</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng<strong>+84 0961664550</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại<strong>+84 0961664550</strong>
                            </p>
                        </div>
                    </div>

               </Grid>
           </div>
       </footer>
    )
}

export default Footer
