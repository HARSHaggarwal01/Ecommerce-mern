import React from 'react'

const BigBanner = () => {
  return (
    <div className="big-banner">
        <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div
                className="banner-wrap"
                style={{ backgroundImage: "url(public/assets/img/banner/big-banner.jpg)" }}
            >
                <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="banner-content">
                    <div className="banner-info">
                        <h6>Mega Collections</h6>
                        <h2>
                        Huge Sale Up To <span>40%</span> Off
                        </h2>
                        <p>at our outlet stores</p>
                    </div>
                    <a href="#" className="theme-btn">
                        Shop Now
                        <i className="fas fa-arrow-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default BigBanner
