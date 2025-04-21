import React from 'react'
import ProductCard from '../ProductCard'
import ProductData from "../../db/product.json";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { BASE_URL,API_URL } from '../../constants/contant';
import axios from 'axios';
import ProductCardShimmer from '../ProductCardShimmer';
import { useSelector } from 'react-redux';

const Popular = () => {

    const { category } = useSelector((state) => state.category);

    var settings = {
        dots: true,
        infinite: false,
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

    const { data ,isLoading ,isError} = useQuery({
        queryKey:[`product-data-popular`],
        queryFn:()=>axios.get(`${BASE_URL}${API_URL.products}?type=popular`).then(res=>res.data.data)
    });

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
                                                        {item.name}
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
                                <div className="product-slider-wrap">
                                    {
                                        isLoading ? (
                                        <Slider {...settings}>
                                            {[...Array(5)].map((_, idx) => <ProductCardShimmer key={idx} />)}
                                        </Slider>
                                        ) : isError ? (
                                        <p>Product Not Found</p>
                                        ) : (
                                        <Slider {...settings}>
                                            {data.map((item, index) => (
                                            <ProductCard key={index} data={item} />
                                            ))}
                                        </Slider>
                                        )
                                    }
                                </div>
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
