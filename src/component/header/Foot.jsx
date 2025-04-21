import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {logout} from '../../features/AuthSlice.js';
import { Link } from 'react-router-dom';

const Foot = () => {

    const [select,setSelect]=useState(false);

    const { token} = useSelector((state) => ({
        token: state.auth.token,
    }));

    const dispatch = useDispatch();

    const categories = [
        ["Medicine","/public/assets/img/icon/medicine.svg"],
        ["Healthcare","/public/assets/img/icon/health-care.svg"],
        ["Beauty Care","/public/assets/img/icon/beauty-care.svg"],
        ["Sexual Wellness","/public/assets/img/icon/sexual.svg"],
        ["Fitness","/public/assets/img/icon/fitness.svg"],
        ["Lab Test","/public/assets/img/icon/lab-test.svg"],
        ["Baby & Mom Care" , "/public/assets/img/icon/baby-mom-care.svg"],
        ["Vitamins & Supplement","/public/assets/img/icon/supplements.svg"],
        ["Food & Nutrition","/public/assets/img/icon/food-nutrition.svg"],
        ["Medical Equipments","assets/img/icon/medical-equipements.svg"],
        ["Pet Care","/public/assets/img/icon/pet-care.svg"]
    ];

  return (
    <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
                <a className="navbar-brand" href="index-2.html">
                    <img src="/public/assets/img/logo/logo.png" className="logo-scrolled" alt="logo" />
                </a>
                <div className="position-relative">
                    <button className="btn btn-outline-secondary d-flex align-items-center gap-2 category-btn" onClick={() => setSelect(!select)}>
                        <i className="fas fa-list-ul" />
                        <span>All Categories</span>
                        <i className={`fas ${select ? "fa-chevron-up" : "fa-chevron-down"}`} />
                    </button>

                    {select && (
                        <ul className="dropdown-menu position-absolute show w-100 mt-2 shadow rounded overflow-x-hidden" style={{ maxHeight: "300px" }}>
                            {categories.map(([title, iconPath], index) => (
                                <li key={index}>
                                    <a href="#" style={{whiteSpace:"normal",fontSize:"13px"}} className="dropdown-item d-flex align-items-center gap-2">
                                        <img src={iconPath} alt={title} width="24" height="24" />
                                        <span>{title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mobile-menu-right">
                    <div className="mobile-menu-btn">
                        <a href="#" className="nav-right-link search-box-outer">
                            <i className="fas fa-search" />
                        </a>
                        <a href="wishlist.html" className="nav-right-link">
                            <i className="fas fa-heart" />
                            <span>2</span>
                        </a>
                        <a href="shop-cart.html" className="nav-right-link">
                            <i className="fas fa-shopping-bag" />
                            <span>5</span>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="{-1}" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <a href="index-2.html" className="offcanvas-brand" id="offcanvasNavbarLabel">
                            <img src="assets/img/logo/logo.png" alt="" />
                        </a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 justify-content-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">
                                    About
                                </a>
                            </li>
                           
                            <li className="nav-item mega-menu dropdown">
                                <a className="nav-link d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                                    Menu <i className="fas fa-chevron-down ms-1" style={{fontSize:'10px'}}></i>
                                </a>
                                <div className="dropdown-menu fade-down">
                                    <div className="mega-content">
                                        <div className="container-fluid px-lg-0">
                                            <div className="row">
                                                <div className="col-12 col-lg-2">
                                                    <h5 className="mega-menu-title">Medicine</h5>
                                                    <ul className="mega-menu-item">
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Allergies &amp; Sinus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                E.N.T Preparations
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Eye Preparations
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Vitamin &amp; Nutritional
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Fever &amp; Pain Relief
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Dermatological
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-lg-2">
                                                    <h5 className="mega-menu-title">Equipment</h5>
                                                    <ul className="mega-menu-item">
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Biopsy Tools
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Monitoring
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Infusion Stands
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Lighting
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Machines
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Thermometer
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-lg-2">
                                                    <h5 className="mega-menu-title">Wound Care</h5>
                                                    <ul className="mega-menu-item">
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Surgical Sutures
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Bandages
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Patches and Tapes
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Stomatology
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Wound Healing
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Uniforms
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-lg-2">
                                                    <h5 className="mega-menu-title">Higiene</h5>
                                                    <ul className="mega-menu-item">
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Face Masks
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Sterilization
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Surgical Foils
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Disposable Products
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Protective Covers
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="shop-grid.html">
                                                                Diagnostic Tests
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <div className="mega-menu-img">
                                                        <a href="#">
                                                            <img src="assets/img/banner/mega-menu-banner.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/shop-list">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            {
                                token ? (
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={()=>{
                                            dispatch(logout())
                                        }}>
                                            Logout
                                        </a>
                                    </li>
                                ):""
                            }
                        </ul>
                        {/* nav-right */}
                        <div className="nav-right">
                            <a className="nav-right-link" href="#"> <i className="fal fa-star" /> Recently Viewed </a>
                            {/* <a className="nav-right-link" href="track-order.html"> <i className="fal fa-truck-fast" /> Track My Order </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  )
}

export default Foot
