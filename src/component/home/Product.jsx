import React from 'react'
import ProductCard from '../ProductCard'
import Slider from "react-slick";
import Data from "../../db/product.json";

const Product = ({title}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768, // screen width below 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = Data;

    return (
        <div className="product-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInDown" data-wow-delay=".25s">
                        <div className="site-heading-inline">
                            <h2 className="site-title">{title} Items</h2>
                            <a href="#"> View More <i className="fas fa-angle-double-right" /> </a>
                        </div>
                    </div>
                </div>
                <div className="product-wrap item-2 wow fadeInUp" data-wow-delay=".25s">
                    <div className="product-slider owl-carousel owl-theme gap-2">
                        <Slider {...settings}>
                            {
                                data.map((elem)=>(
                                    <ProductCard data={elem} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
