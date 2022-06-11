import React from 'react'
import './Shop.css'

import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderListProduct from '../headerListProduct/HeaderListProduct'
import ContentShop from './content.shop'
import BannerShop from './banner.shop'
import Banner from '../banner/Banner'
import BannerSecond from '../bannerSecond/BannerSecond'
import Footer from '../footertest/Footer'

const Shop = ({ islogin, logout, category,
  publisher, product, totalpage, backPage,
  nextPage, setPage, page, sortType, setSortType,
  setRangeType, title, setTitle, setBranch, branch,
  setSearchText, author, setIDBranch, branchClick, history,
  searchTextSubmit, addToCart }) => (

  <div>
    <header id="header">
      <HeaderTop />
      <HeaderMiddle
        islogin={islogin}
        logout={() => logout()}
        history={history}
      />
    </header>
    <Banner />

    <div className="list-product pt-28">
      <BannerShop
        product={product}
        addToCart={(product) => addToCart(product)}
      />
    </div>
    <div className="list-product1">
      <HeaderListProduct titleName="featured products" />
    </div>
    <div id='footer'>
      <Footer />
    </div>
  </div>
)

export default Shop