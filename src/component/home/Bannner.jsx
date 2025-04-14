import React from 'react'

const Bannner = () => {
  return (
    <div className="small-banner pb-100">
        <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="banner-item">
                        <img src="public/assets/img/banner/mini-banner-1.jpg" alt="" />
                        <div className="banner-content">
                            <p>Sanitizer</p>
                            <h3>
                                Hand Sanitizer <br />
                                Collectons
                            </h3>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="banner-item">
                        <img src="public/assets/img/banner/mini-banner-2.jpg" alt="" />
                        <div className="banner-content">
                            <p>Hot Sale</p>
                            <h3>
                                Face Wash Sale <br />
                                Collections
                            </h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="banner-item">
                        <img src="public/assets/img/banner/mini-banner-3.jpg" alt="" />
                        <div className="banner-content">
                            <p>Facial Mask</p>
                            <h3>
                                Facial Mask Sale <br />
                                Up To <span>50%</span> Off
                            </h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Bannner
