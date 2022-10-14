import React from 'react'
import Heading from '../Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../Product/ProductCard';
import { useSelector } from "react-redux";

const PopularProduct = () => {
  let products = useSelector((state) => state.products.products);
  products = products.filter(item => item.category === 'furniture')

    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 400, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
 
            breakpoint: 1324,
            settings: {
              slidesToShow: 3,
            }
          }, 
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      };
    return (
        <>
        <section id="furniture_top_product" className="ptb-100">
        <div className="container">
            <Heading heading={'Top Picks For You'} />
            <div className="row">
                <div className="col-lg-12">
                    <div className="furniture_top_slider">
                    
                    <Slider {...settings}>
                    {products.slice(3, 9).map((data, index) =>(
                          <ProductCard data={data} key={index} />    
                     ))}
                  </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default PopularProduct
