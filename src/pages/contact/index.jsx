import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL,API_URL } from '../../constants/contant';
import { toast } from 'react-toastify';
import axios from 'axios';

const index = () => {

    const { user } = useSelector((state) => ({
        user: state.auth.user,
    }));

    const [input,setInput] = useState({name:"",email:'',subject:"",description:""});
    const [loading,setLoading] = useState(false);

    const inputHandler = (e) => {
        const {name,value} = e.target
        setInput((prevInput)=>({
            ...prevInput,
            [name]:value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
    
        axios.post(`${BASE_URL}${API_URL.contact}`, {
            name: input.name,
            email: input.email,
            subject: input.subject,
            description: input.description
        })
        .then((response) => {
            console.log(response);
            setLoading(false);
            toast.success(response.data.message || "Message sent successfully");
            setInput({name:"",email:'',subject:"",description:""})
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            toast.error(err?.response?.data?.message || "Something went wrong");
        });
    };    


  return (
    <>
        <main className="main">

            <div className="contact-area pt-100 pb-80">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-info">
                                                <div className="contact-info-icon">
                                                    <i className="fal fa-map-location-dot" />
                                                </div>
                                                <div className="contact-info-content">
                                                    <h5>Office Address</h5>
                                                    <p>25/B Milford Elm Drive Road, New York, USA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info">
                                                <div className="contact-info-icon">
                                                    <i className="fal fa-headset" />
                                                </div>
                                                <div className="contact-info-content">
                                                    <h5>Call Us</h5>
                                                    <p>{user?.mobile}</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info">
                                                <div className="contact-info-icon">
                                                    <i className="fal fa-envelopes" />
                                                </div>
                                                <div className="contact-info-content">
                                                    <h5>Email Us</h5>
                                                    <p>
                                                        <a href="https://live.themewild.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b1d8dfd7def1d4c9d0dcc1ddd49fd2dedc">
                                                            {user?.email}
                                                        </a>
                                                    </p>
                                                    <p>
                                                        <a href="https://live.themewild.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="53202623233c212713362b323e233f367d303c3e">
                                                            
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info">
                                                <div className="contact-info-icon">
                                                    <i className="fal fa-alarm-clock" />
                                                </div>
                                                <div className="contact-info-content">
                                                    <h5>Open Time</h5>
                                                    <p>Mon - Sat (10AM - 05PM)</p>
                                                    <p>Sunday - <span className="text-danger">Closed</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-form">
                                    <div className="contact-form-header">
                                        <h2>Get In Touch</h2>
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page words which even slightly when looking at its layout.{" "}
                                        </p>
                                    </div>
                                    <form onSubmit={submitHandler}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" value={input.name} onChange={inputHandler} className="form-control" name="name" placeholder="Your Name" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" value={input.email} onChange={inputHandler} className="form-control" name="email" placeholder="Your Email" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text"  value={input.subject} onChange={inputHandler} className="form-control" name="subject" placeholder="Your Subject" required="" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="description" value={input.description} onChange={inputHandler} cols={30} rows={4} className="form-control" placeholder="Write Your Message" required="" defaultValue={""} />
                                        </div>
                                        <button type="submit" className="theme-btn"> {loading? "Sending....":<> Send Message <i className="far fa-paper-plane" /></>}</button>
                                        <div className="col-md-12 my-3">
                                            <div className="form-messege text-success" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="newsletter-area pb-100">
                <div className="container wow fadeInUp" data-wow-delay=".25s">
                    <div className="newsletter-wrap">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="newsletter-content">
                                    <h3>Get <span>20%</span> Off Discount Coupon</h3>
                                    <p>By Subscribe Our Newsletter</p>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="email" className="form-control" placeholder="Your Email Address" />
                                            <button className="theme-btn" type="submit">Subscribe <i className="far fa-paper-plane" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact-map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                style={{ border: 0 }} allowFullScreen="" loading="lazy" />
            </div>
           
        </main>

    </>
  )
}

export default index
