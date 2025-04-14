import React from 'react'
import ProductCard from '../ProductCard'
import ProductData from "../../db/product.json";
import Slider from "react-slick";

const Popular = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    
    var categorySettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    const category = ["Medicine","Beauty Care","Healthcare","Baby & Mom Care","Food & Nutrition","Medical Equipments"]
  return (
    <div className="product-area pb-100">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="site-heading-inline">
                                <h2 className="site-title">Popular Items</h2>
                                <a href="#"> All Products <i className="fas fa-angle-double-right" /> </a>
                            </div>
                            <div className="item-tab">
                                <ul className="mt-40 mb-50" id="item-tab" role="tablist">
                                    <Slider {...categorySettings}>
                                        {
                                            category?.map((item)=>(
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" >
                                                        {item}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="" >
                        <div className="">
                            <div className="row g-3 item-2">
                                <Slider {...settings}>
                                    {
                                        ProductData.map((item)=>(
                                            <ProductCard data={item}/>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="product-banner wow fadeInRight" data-wow-delay=".25s">
                        <a href="#">
                            <img src="public/assets/img/banner/product-banner.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Popular
