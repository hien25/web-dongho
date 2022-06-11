import React from "react";
import "./HeaderListProduct.css";
import img5 from '../assets/donghothongminh.jpg'
import img3 from '../assets/dayda.jpg'
import img4 from '../assets/dayinox.jpg'

import img1 from '../assets/casio1.jpg'
import img2 from '../assets/automatic.jpg'

import { Link } from "react-router-dom";



const HeaderListProduct = ({ titleName }) => {
  return (
    <section className="content-category pt-5">
      <div className="text-center">
        <h2 className="h5 text-uppercase mb-4">sản phẩm theo nhóm</h2>
      </div>
      <div className="row content-category">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <Link className="category-item" to={'/shop'}>
              <img className="img-fluid" src={img1} alt="" />
              <strong className="category-item-title">Đồng hồ điện tử</strong>
            </Link>
            <Link className="category-item" to={'/shop'}>
              <img className="img-fluid" src={img2} alt="" />
              <strong className="category-item-title">Đồng hồ cơ tự động</strong>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <Link className="category-item mb-4" to={'/shop'}>
                <img className="img-fluid" src={img3} alt="" />
                <strong className="category-item-title">Đồng hồ dây da</strong>
              </Link>
              <Link className="category-item mb-4" to={'/shop'}>
                <img className="img-fluid" src={img4} alt="" />
                <strong className="category-item-title">Đồng hồ dây inox</strong>
              </Link>
          </div>
          </div>
        </div>
        <div className="col-content col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Link className="category-item1" to={'/shop'}>
            <img className="img-fluid1" src={img5} alt="" />
            <strong className="category-item-title1">Đồng hồ thông minh</strong>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderListProduct;
