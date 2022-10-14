 import React from 'react'
 import { Link } from 'react-router-dom'
//  import img
import fimg22 from '../../../assets/img/furniture/product/sofa19.jpg'
import fimg23 from '../../../assets/img/furniture/product/sofa20.jpg'
import fimg24 from '../../../assets/img/furniture/product/sofa13.jpg'

 
 const BannerBottom = () => {
     return (
         <>
        <section id="furniture_second_banner" className="pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12 ">
                    <div className="furniture_second_ban_box height1">
                            <img src={fimg24} alt="img" />
                        <div className="furniture_second_ban_des">
                            <h2>Outdoor Furniture</h2>
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="furniture_second_ban_box height2 mb-30">
                            <img src={fimg23} alt="img"/>
                        <div className="furniture_second_ban_des">
                            <h2>Outdoor Furniture</h2>
                            <Link to="/shop">Shop Now</Link>
                        </div> 
                    </div>
                    <div className="furniture_second_ban_box height2">
                            <img src={fimg22} alt="img" />
                        <div className="furniture_second_ban_des">
                            <h2>Outdoor Furniture</h2>
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
         </>
     )
 }
 
 export default BannerBottom
 