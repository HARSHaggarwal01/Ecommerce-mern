import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div className="product-item me-3">
        <div className="product-img">
            <span className="type new">{data.title}</span>
            <a href="shop-single.html">
                <img src={data.image} alt="" />
            </a>
            <div className="product-action-wrap">
                <div className="product-action">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#quickview" data-tooltip="tooltip" title="Quick View">
                        <i className="fas fa-eye" />
                    </a>
                    <a href="#" data-tooltip="tooltip" title="Add To Wishlist">
                        <i className="fas fa-heart" />
                    </a>
                    <a href="#" data-tooltip="tooltip" title="Add To Compare">
                        <i className="fas fa-retweet"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="product-content">
            <h3 className="product-title">
                <a href="shop-single.html">{data.name}</a>
            </h3>
            <div className="product-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
            </div>
            <div className="product-bottom">
                <div className="product-price">
                    <span>${data.price}</span>
                </div>
                <button type="button" className="product-cart-btn" data-bs-placement="left" data-tooltip="tooltip" title="Add To Cart">
                    <i className="fas fa-shopping-bag" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
