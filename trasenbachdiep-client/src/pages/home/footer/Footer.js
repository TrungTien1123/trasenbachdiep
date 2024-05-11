import React from 'react'
import './Footer.css'
import logo from '../../../images/Layout/Logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
    <div className="col-8 m-auto d-flex justify-content-between ">
        <div className="information">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className="detail pt-3">
                <div>
                <p>0963210895</p>
                </div>
                <div>
                <p>trungtien112003@gmail.com</p>
                </div>
                <div>
                <p>C12,TT Kim Liên, Đống Đa, Hà Nội</p>
                </div>
            </div>
        </div>
        <div className="information">
            <div>
                <h4>VỀ CHÚNG TÔI</h4>
            </div>
            <div className="detail nav-bottom pt-4">
                <div>
                <Link to={'/about'}>Giới thiệu</Link>
                </div>
                <div>
                <Link to={'/products'}>Sản phẩm</Link>
                </div>
                <div>
                <Link to={'/news'}>Tin tức</Link>
                </div>
            </div>
        </div>
        <div className="information">
            <div>
                <h4>LIÊN HỆ</h4>
            </div>
            <div className="detail pt-3">
                <div className="d-flex justify-content-between ">
                    <a className="pr-2" href="https://www.youtube.com/@ChungTrinhEduChannel">
                    <i className="fa-brands icon fa-youtube"></i>
                    </a>
                    <a className="pr-2" href="!#">
                        <i className="fa-brands icon fa-instagram"></i>
                    </a>
                    <a className="pr-2" href="https://www.facebook.com/trung.tien.52090/">
                        <i className="fa-brands icon fa-square-facebook"></i>
                    </a>
                </div>
                <div>
                <p>Copyright </p>
                </div>
                <div>
                <p>All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer