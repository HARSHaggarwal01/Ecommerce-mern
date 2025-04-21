import React from 'react'
import ProductCard from '../ProductCard'
import Slider from "react-slick";
import Data from "../../db/product.json";
import { useQuery } from '@tanstack/react-query';
import { BASE_URL,API_URL } from '../../constants/contant';
import axios from 'axios';
import ProductCardShimmer from '../ProductCardShimmer';

const Product = ({title}) => {

    var settings = {
        dots: true,
        infinite: false,
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

    const type = title == "trending" ? 'top_selling':"featured";

    const { data ,isLoading ,isError} = useQuery({
        queryKey:[`product-data-${title}`],
        queryFn:()=>axios.get(`${BASE_URL}${API_URL.products}?type=${type}`).then(res=>res.data.data)
    });

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

    )   
}

export default Product
