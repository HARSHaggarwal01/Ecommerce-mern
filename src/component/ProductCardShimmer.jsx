import React from 'react';

const ProductCardShimmer = () => {
  return (
    <>
      <style>{`
        .shimmer-bg {
          background-color: #e0e0e0;
          border-radius: 4px;
        }

        .animate-shimmer {
          animation: shimmer 1.6s infinite linear;
          background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
          background-size: 1000px 100%;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer-line {
          height: 12px;
          width: 100%;
          margin: 4px 0;
          border-radius: 4px;
        }

        .product-img .type {
          height: 20px;
          width: 40px;
          margin: 8px;
        }

        .product-img {
          position: relative;
          height: 220px;
        }

        .shimmer-img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }

        .product-action-wrap,
        .product-rate,
        .product-price,
        .product-cart-btn {
          pointer-events: none;
        }

        .shimmer-title {
          height: 16px;
          width: 80%;
          margin: 10px 0;
        }

        .shimmer-rating {
          height: 12px;
          width: 50%;
          margin: 8px 0;
        }

        .shimmer-price {
          width: 60px;
          height: 16px;
          margin-right: auto;
        }

        .shimmer-cart {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
      `}</style>

      <div className="product-item shimmer me-3">
        <div className="product-img">
          <div className="type shimmer-bg animate-shimmer"></div>
          <div className="shimmer-img shimmer-bg animate-shimmer"></div>
          <div className="product-action-wrap">
            <div className="product-action">
              <div className="shimmer-cart shimmer-bg animate-shimmer" />
              <div className="shimmer-cart shimmer-bg animate-shimmer" />
              <div className="shimmer-cart shimmer-bg animate-shimmer" />
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="shimmer-title shimmer-bg animate-shimmer"></div>
          <div className="shimmer-rating shimmer-bg animate-shimmer"></div>
          <div className="product-bottom">
            <div className="shimmer-price shimmer-bg animate-shimmer"></div>
            <div className="shimmer-cart shimmer-bg animate-shimmer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardShimmer;
