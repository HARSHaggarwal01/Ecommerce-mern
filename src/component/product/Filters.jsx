import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../../features/CategorySlice';

const Filters = ({ onSearchChange }) => {

    const dispatch = useDispatch();

    const { category } = useSelector((state) => state.category);

    useEffect(()=>{
        dispatch(fetchCategoriesAsync());
    },[]);

    return (
        <>
            <div className="col-lg-3">
                <div className="shop-sidebar">
                    <div className="shop-widget">
                        <div className="shop-search-form">
                            <h4 className="shop-widget-title">Search</h4>
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" onChange={(e)=>onSearchChange(e.target.value)} className="form-control" placeholder="Search" />
                                    <button type="search">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Category</h4>
                        <ul className="shop-category-list">
                            {
                                category.map((item,index)=>(
                                    <li key={index}>
                                        <a href="#"> {item.name}<span>(15)</span> </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Brands</h4>
                        <ul className="shop-checkbox-list">
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand1" />
                                    <label className="form-check-label" htmlFor="brand1"> Tovol<span>(12)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand2" />
                                    <label className="form-check-label" htmlFor="brand2"> Sundoy<span>(15)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand3" />
                                    <label className="form-check-label" htmlFor="brand3"> Sahoo Medoc<span>(20)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand4" />
                                    <label className="form-check-label" htmlFor="brand4"> Casterly<span>(05)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand5" />
                                    <label className="form-check-label" htmlFor="brand5"> Maindeno<span>(09)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand6" />
                                    <label className="form-check-label" htmlFor="brand6"> Knroll Seproll<span>(25)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand7" />
                                    <label className="form-check-label" htmlFor="brand7"> Neo Enternity<span>(19)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand8" />
                                    <label className="form-check-label" htmlFor="brand8"> Charisha<span>(23)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand9" />
                                    <label className="form-check-label" htmlFor="brand9"> Audou<span>(13)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand10" />
                                    <label className="form-check-label" htmlFor="brand10"> Desioreck<span>(14)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand11" />
                                    <label className="form-check-label" htmlFor="brand11"> Rochel Brek<span>(16)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand12" />
                                    <label className="form-check-label" htmlFor="brand12"> Mordani<span>(17)</span> </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="brand13" />
                                    <label className="form-check-label" htmlFor="brand13"> Others<span>(18)</span> </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Price Range</h4>
                        <div className="price-range-box">
                            <div className="price-range-input">
                                <input type="text" id="price-amount" readOnly="" />
                            </div>
                            <div className="price-range" />
                        </div>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Sales</h4>
                        <ul className="shop-checkbox-list">
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sale1" />
                                    <label className="form-check-label" htmlFor="sale1">
                                        On Sale
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sale2" />
                                    <label className="form-check-label" htmlFor="sale2">
                                        In Stock
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sale3" />
                                    <label className="form-check-label" htmlFor="sale3">
                                        Out Of Stock
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sale4" />
                                    <label className="form-check-label" htmlFor="sale4">
                                        Discount
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Ratings</h4>
                        <ul className="shop-checkbox-list rating">
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rate1" />
                                    <label className="form-check-label" htmlFor="rate1">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rate2" />
                                    <label className="form-check-label" htmlFor="rate2">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fal fa-star" />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rate3" />
                                    <label className="form-check-label" htmlFor="rate3">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rate4" />
                                    <label className="form-check-label" htmlFor="rate4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rate5" />
                                    <label className="form-check-label" htmlFor="rate5">
                                        <i className="fas fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Colors</h4>
                        <ul className="shop-checkbox-list color">
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="color1" />
                                    <label className="form-check-label" htmlFor="color1">
                                        <span style={{ backgroundColor: "#606ddd" }} />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="color2" />
                                    <label className="form-check-label" htmlFor="color2">
                                        <span style={{ backgroundColor: "#4caf50" }} />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="color3" />
                                    <label className="form-check-label" htmlFor="color3">
                                        <span style={{ backgroundColor: "#17a2b8" }} />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="color4" />
                                    <label className="form-check-label" htmlFor="color4">
                                        <span style={{ backgroundColor: "#ffc107" }} />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="color5" />
                                    <label className="form-check-label" htmlFor="color5">
                                        <span style={{ backgroundColor: "#f44336" }} />
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-widget">
                        <h4 className="shop-widget-title">Sizes</h4>
                        <ul className="shop-checkbox-list">
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="size1" />
                                    <label className="form-check-label" htmlFor="size1">
                                        Extra Small
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="size2" />
                                    <label className="form-check-label" htmlFor="size2">
                                        Small
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="size3" />
                                    <label className="form-check-label" htmlFor="size3">
                                        Medium
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="size4" />
                                    <label className="form-check-label" htmlFor="size4">
                                        Large
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="size5" />
                                    <label className="form-check-label" htmlFor="size5">
                                        Extra Large
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-widget-banner mt-30 mb-50">
                        <div className="banner-img" style={{ backgroundImage: "url(assets/img/banner/shop-banner.jpg)" }} />
                        <div className="banner-content">
                            <h6>Get <span>35% Off</span></h6>
                            <h4>New Collection of Medicine</h4>
                            <a href="#" className="theme-btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters
