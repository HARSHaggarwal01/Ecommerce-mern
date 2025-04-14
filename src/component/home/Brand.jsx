import React from 'react'
import Slider from "react-slick";

const Brand = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 1,
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

  return (
    <div className="brand-area pt-80 mb-60">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="site-heading-inline">
                        <h2 className="site-title">Popular Brands</h2>
                        <a href="#"> All Brands <i className="fas fa-angle-double-right" /> </a>
                    </div>
                </div>
            </div>
            <div className="brand-slider owl-carousel owl-theme">
                <Slider {...settings}>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/01.png" alt="" />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/02.png" alt="" />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/03.png" alt="" />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/04.png" alt="" />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/05.png" alt="" />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/06.png" alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    </div>

  )
}

export default Brand
