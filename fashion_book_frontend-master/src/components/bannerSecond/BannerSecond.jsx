import React from 'react'
import './BannerSecond.css'
import { NavLink } from "react-router-dom";

const BannerSecond = ({ nameProduct, titleName, linkImg }) => {
  return (
    <div>
      <div className="slick-slider1" style={{ backgroundImage: linkImg }}>
        <div className="banner-main1">
          <h3>
            Máy Cơ Thụy Sỹ Siêu Mỏng
          </h3>
          <h1 className='text-main-second1'>{nameProduct}</h1>
          {/* <h3>Sản Phẩm nổi bât</h3>
                <h1 className='text-main'>Xoài Thái</h1> */}
          <p>Nếu bạn đang tìm một mẫu đồng hồ đeo tay đẳng cấp, được chế tác tinh xảo, đến từ thương hiệu lớn. Thì một lựa chọn nổi bật đó là đồng hồ Frederique Constant. Hãng đồng hồ Frederique Constant là một thương hiệu nổi tiếng toàn cầu, gây ấn tượng mạnh mẽ cho người sử dụng. Được thiết kế và gia công bởi những người thợ dày dặn kinh nghiệm, độ tinh xảo của mẫu đồng hồ này làm nhiều người muốn sở hữu.</p>
          <NavLink className="default-btn1" to="/shop">
            Shop now
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default BannerSecond