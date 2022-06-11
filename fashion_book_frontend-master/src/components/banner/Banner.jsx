import React from 'react'
import './Banner.css'
import { NavLink } from "react-router-dom";
import imgbanner from '../assets/banner1.jpg'

const Banner = () => {
  return (
    <div>
      <div className="slick-slider " style={{ backgroundImage: {imgbanner} }}>
        <div className="banner-main">
          <h3>XỨNG TẦM DOANH NHÂN</h3>
          <h1 className='text-main'>SANG TRỌNG ĐẲNG CẤP</h1>
          {/* <h3>Sản Phẩm nổi bât</h3>
                <h1 className='text-main'>Xoài Thái</h1> */}
          <p>Cam kết giá tốt nhất</p>
          <NavLink className="default-btn" to="/shop">
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Banner