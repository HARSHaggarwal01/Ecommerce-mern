import React from 'react'
import Slider from "react-slick";

const Sliders = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <div className="hero-section hs-1 mt-30">
        <div className="container">
          <div className="hero-slider owl-carousel owl-theme">
            <Slider {...settings}>
              <div className="hero-single">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Easy Health Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Medicine &amp; Health Care <span>For Your</span> Family
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum available
                          but the majority have suffered alteration in some form by
                          injected humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <a href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </a>
                          <a href="about.html" className="theme-btn theme-btn2">
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="hero-right"
                        data-animation="fadeInRight"
                        data-delay=".25s"
                      >
                        <div className="hero-img">
                          <div className="hero-img-price">
                            <span>Price</span>
                            <span>$250</span>
                          </div>
                          <img src="assets/img/hero/01.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-single">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Easy Health Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Medicine &amp; Health Care <span>For Your</span> Family
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum available
                          but the majority have suffered alteration in some form by
                          injected humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <a href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </a>
                          <a href="about.html" className="theme-btn theme-btn2">
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="hero-right"
                        data-animation="fadeInRight"
                        data-delay=".25s"
                      >
                        <div className="hero-img">
                          <div className="hero-img-price">
                            <span>Price</span>
                            <span>$250</span>
                          </div>
                          <img src="assets/img/hero/02.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-single">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Easy Health Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Medicine &amp; Health Care <span>For Your</span> Family
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum available
                          but the majority have suffered alteration in some form by
                          injected humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <a href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </a>
                          <a href="about.html" className="theme-btn theme-btn2">
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="hero-right"
                        data-animation="fadeInRight"
                        data-delay=".25s"
                      >
                        <div className="hero-img">
                          <div className="hero-img-price">
                            <span>Price</span>
                            <span>$250</span>
                          </div>
                          <img src="assets/img/hero/03.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sliders
