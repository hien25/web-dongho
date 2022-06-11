import React from "react";
import "./Footer.css";
import logo from '../assets/pxhwatch1.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-service max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
          <div className="service-content">
            <div className="columns-3">
              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/rocket.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Free delivery</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>

              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/money.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Money Guarantee</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>

              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/support.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Online Support</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget-area">
          <div className="footer-logo">
            <a href="#">
              <img
                src={logo}
                alt=""
              />
            </a>
            <p>
              PXHWATCH - Shop chuyên nhập khẩu và phân phối các loại đồng hồ, túi xách, hàng hiệu chính hãng: Nhật, Thụy Sỹ, Mỹ...
            </p>
          </div>
          <div className="footer-widget-container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full flex flex-wrap">
            <div className="footer-widget-left">
              <div className="single-footer-widget">
                <h3>PXHWATCH</h3>
                <div className="footer-text">
                  <span>
                    <i className="fa fa-home"></i>Address :
                    số 7 nguyễn văn lộc
                  </span>
                  <span>
                    <i className="fa fa-phone"></i>Phone :  0826626899
                  </span>
                  <span>
                    <i className="fa fa-envelope"></i>Email :
                    phamxuanhien@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-widget-left">
              <div className="single-footer-widget">
                <h3>HƯỚNG DẪN</h3>
                <ul className="footer-widget-list">
                  <li>
                    <a href="shop.html">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="shop.html">Hướng dẫn thanh toán</a>
                  </li>
                  <li>
                    <a href="shop.html">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="shop.html">Điều khoản dịch vụ</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-widget-left">
              <div className="single-footer-widget">
                <h3>Chính sách</h3>
                <ul className="footer-widget-list">
                  <li>
                    <a href="shop.html">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="shop.html">Chính sách vận chuyển</a>
                  </li>
                  <li>
                    <a href="shop.html">Chính sách đổi trả</a>
                  </li>
                  <li>
                    <a href="shop.html">Quy định sử dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget-left">
              <div className="single-footer-widget">
                <h3>Về Chúng tôi</h3>
                <ul className="footer-widget-list">
                  <li>
                    <a href="/">TRANG CHỦ</a>
                  </li>
                  <li>
                    <a href="/">TIN TỨC</a>
                  </li>
                  <li>
                    <a href="shop.html">SẢN PHẨM</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
