import React from 'react'

const Feature = () => {
  return (
    <div className="feature-area pb-100">
        <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="feature-wrap">
                <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-truck" />
                            </div>
                            <div className="feature-content">
                                <h4>Free Delivery</h4>
                                <p>Orders Over $120</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-sync" />
                            </div>
                            <div className="feature-content">
                                <h4>Get Refund</h4>
                                <p>Within 30 Days Returns</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-wallet" />
                            </div>
                            <div className="feature-content">
                                <h4>Safe Payment</h4>
                                <p>100% Secure Payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-headset" />
                            </div>
                            <div className="feature-content">
                                <h4>24/7 Support</h4>
                                <p>Feel Free To Call Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Feature
