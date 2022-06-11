import React from 'react'
import { Link } from 'react-router-dom'
const ProductItem = ({urlImg, price, name, id, product }) => (
    <div>
        <div className="product-image-wrapper1">
            <div className="single-products1">
                <div className="productinfo1 text-center"
                >   
                    <Link to={'/product/' + id}><img src={urlImg} alt="" /></Link>
                    <h4 className='name-product1'>{name}</h4>
                    <div className='product-content1'>
                    <h2>Giá:</h2>
                    <Link to={'/product/' + id}><h2>{new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(price)}<sup>đ</sup></h2></Link>
                    </div>
                    
                    
                  
                </div>
            </div>
        </div>
    </div>
)
export default ProductItem