    import React, { useState } from 'react'
    import { Link } from 'react-router-dom';
    import { useSelector } from 'react-redux';

    const Middle = () => {

        const { token, user } = useSelector((state) => ({
            token: state.auth.token,
            user: state.auth.user
        }));
        
        const [select,setSelect]=useState(false);
        const [icon,setIcon]=useState('fas fa-chevron-down');
        const [value,setvalue]=useState('All Categories');

        const categories = [
            "Medicine",
            "Medical Equipments",
            "Beauty Care",
            "Baby & Mom Care",
            "Healthcare",
            "Food & Nutrition",
            "Medical Supplies",
            "Lab Test",
            "Fitness",
            "Vitamins & Supplement",
            "Pet Care",
        ];

        const arrowIcon = ()=>{
            var icon ;
            if(select){
                icon ="fas fa-chevron-down"
            }else{
                icon ="fas fa-chevron-up";
            }
            setIcon(icon);
        }

    return (
        <div className="header-middle">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5 col-lg-3 col-xl-2">
                        <div className="header-middle-logo">
                            <Link className="navbar-brand" to="/">
                                <img src="/public/assets/img/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-6 col-xl-5">
                        <div className="header-middle-search">
                            <form action="#">
                            <div className="search-content d-flex align-items-center gap-3">
                            <div className='position-relative'>
                                <button onClick={()=>(setSelect(!select),arrowIcon())} style={{width:'140px'}} className='bg-transparent m-0 px-2 d-flex space-between border-0 flex-shrink-0'>{value} <i className={icon}></i></button>
                                {
                                    select ? (
                                    <div className="bg-white position-absolute top-100 overflow-y-auto p-4 rounded-3" style={{maxHeight:'200px',boxShadow:'0 0 3px #000'}} >
                                        {categories.map((elem,index)=>{
                                            return <div key={index} onClick={()=>(setvalue(elem),setSelect(false),arrowIcon())}>{elem}</div>
                                        })}
                                        
                                    </div>
                                    ):""
                                }
                            </div>
                                <input type="text" className="form-control" placeholder="Search Here..." />
                                <button type="submit" className="search-btn">
                                <i className="fas fa-search"></i>
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    <div className="col-7 col-lg-3 col-xl-5">
                        <div className="header-middle-right">
                            <ul className="header-middle-list">
                                <li>
                                {
                                    token ? (
                                        <Link to="/users/account" className="list-item">
                                            <div className="list-item-icon">
                                                <i className="fas fa-user-circle"></i>
                                            </div>
                                            <div className="list-item-info">
                                                <h6>{user ? user?.name : "New User"}</h6>
                                                <h5>My Account</h5>
                                            </div>
                                        </Link>
                                    ):(
                                        <>
                                            <Link to="/users/login" className="list-item">
                                                <div className="list-item-icon">
                                                    <i className="fas fa-user-circle"></i>
                                                </div>
                                                <div className="list-item-info">
                                                    <h6>Sign In</h6>
                                                    <h5>Account</h5>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                }
                                    
                                </li>
                                <li>
                                    <a href="#" className="list-item">
                                        <div className="list-item-icon">
                                            <i className="fas fa-heart"></i><span>0</span>
                                        </div>
                                        <div className="list-item-info">
                                            <h6>Wishlist</h6>
                                            <h5>My Items</h5>
                                        </div>
                                    </a>
                                </li>
                                <li className="dropdown-cart">
                                    <a href="#" className="shop-cart list-item">
                                        <div className="list-item-icon">
                                            <i className="fas fa-shopping-bag"></i><span>5</span>
                                        </div>
                                        <div className="list-item-info">
                                            <h6>$350.00</h6>
                                            <h5>My Cart</h5>
                                        </div>
                                    </a>
                                    <div className="dropdown-cart-menu">
                                        <div className="dropdown-cart-header">
                                            <span>03 Items</span>
                                            <a href="#">View Cart</a>
                                        </div>
                                        <ul className="dropdown-cart-list">
                                            <li>
                                                <div className="dropdown-cart-item">
                                                    <div className="cart-img">
                                                        <a href="#"><img src="assets/img/product/01.png" alt="#" /></a>
                                                    </div>
                                                    <div className="cart-info">
                                                        <h4><a href="#">Surgical Face Mask</a></h4>
                                                        <p className="cart-qty">1x - <span
                                                                className="cart-amount">$200.00</span></p>
                                                    </div>
                                                    <a href="#" className="cart-remove" title="Remove this item"><i
                                                            className="fas fa-times-circle"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown-cart-item">
                                                    <div className="cart-img">
                                                        <a href="#"><img src="assets/img/product/02.png" alt="#"/></a>
                                                    </div>
                                                    <div className="cart-info">
                                                        <h4><a href="#">Surgical Face Mask</a></h4>
                                                        <p className="cart-qty">1x - <span
                                                                className="cart-amount">$120.00</span></p>
                                                    </div>
                                                    <a href="#" className="cart-remove" title="Remove this item"><i
                                                            className="fas fa-times-circle"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown-cart-item">
                                                    <div className="cart-img">
                                                        <a href="#"><img src="assets/img/product/03.png" alt="#"/></a>
                                                    </div>
                                                    <div className="cart-info">
                                                        <h4><a href="#">Surgical Face Mask</a></h4>
                                                        <p className="cart-qty">1x - <span
                                                                className="cart-amount">$330.00</span></p>
                                                    </div>
                                                    <a href="#" className="cart-remove" title="Remove this item"><i
                                                            className="fas fa-times-circle"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="dropdown-cart-bottom">
                                            <div className="dropdown-cart-total">
                                                <span>Total</span>
                                                <span className="total-amount">$650.00</span>
                                            </div>
                                            <a href="#" className="theme-btn">Checkout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Middle
