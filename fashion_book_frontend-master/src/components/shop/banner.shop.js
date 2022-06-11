import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../shop/product.item";
class BannerShop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row content-shop1">
            <div className="col-sm-3 content-shop-title">
              <h2><a><span className="t1">Top sản phẩm</span><span className="t2">BÁN CHẠY</span></a></h2>
              <Link className="default-btn2" to="/shop">
                Buy Now
              </Link>            
              </div>
            <div className="col-sm-9 content-shop-detail">
              {this.props.product.map((element, index) => {
                if (index < 4) {
                  return (
                    <ProductItem
                      product={element}
                      urlImg={element.img}
                      price={element.price}
                      describe={element.describe}
                      id={element._id}
                      name={element.name}
                      addToCart={product => this.props.addToCart(product)}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BannerShop;
