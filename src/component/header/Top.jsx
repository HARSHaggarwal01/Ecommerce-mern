import React from 'react'

const Top = () => {
  return (
    <div className="header-top">
        <div className="container">
            <div className="header-top-wrapper">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                        <div className="header-top-left">
                            <ul className="header-top-list">
                                <li>
                                    <a href="mailto:info@example.com">
                                        <i className="fas fa-envelope"></i>
                                        <span>info@example.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+21236547898">
                                        <i className="fas fa-headset"></i> +2 123 654 7898
                                    </a>
                                </li>
                                <li className="help">
                                    <a href="#">
                                        <i className="fas fa-question-circle"></i> Need Help?
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                        <div className="header-top-right">
                            <ul className="header-top-list">
                                <li>
                                    <a href="#">
                                        <i className="fas fa-clock"></i> Daily Deal
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-dollar-sign"></i> USD
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">USD</a>
                                            <a className="dropdown-item" href="#">EUR</a>
                                            <a className="dropdown-item" href="#">AUD</a>
                                            <a className="dropdown-item" href="#">CUD</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-globe-americas"></i> EN
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">EN</a>
                                            <a className="dropdown-item" href="#">FR</a>
                                            <a className="dropdown-item" href="#">DE</a>
                                            <a className="dropdown-item" href="#">RU</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="social">
                                    <div className="header-top-social">
                                        <span>Follow Us: </span>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-x-twitter"></i></a> {/* Twitter in FA6 */}
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Top
