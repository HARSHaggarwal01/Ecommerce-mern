import React, { useEffect,useState } from 'react';
import { API_URL, BASE_URL } from '../../constants/contant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData, setToken } from "../../features/AuthSlice.js";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {
    const [input, setInput] = useState({ name: '', email: '', password: '', mobile: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { token } = useSelector((state) => ({
        token: state.auth.token
    }));

    useEffect(() => {
        if (token) navigate('/', { replace: true });
    }, [token, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        const registerData = {
            name: input.name,
            email: input.email,
            mobile: input.mobile,
            password: input.password,
        };

        axios.post(`${BASE_URL}${API_URL.register}`, registerData)
            .then((response) => {
                dispatch(setUserData(response.data.user));
                dispatch(setToken(response.data.token));
                toast.success(response.data.message);
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.response?.data?.message);
                setLoading(false);
            });
    };

    return (
        <>
            <main className="main">
                <div className="login-area py-100">
                    <div className="container">
                        <div className="col-md-5 mx-auto">
                            <div className="login-form">
                                <div className="login-header">
                                    <img src="/public/assets/img/logo/logo.png" alt="Logo" />
                                    <p>Create your free Medica account</p>
                                </div>
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label>Full Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={input.name}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address <span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={input.email}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile <span className="text-danger">*</span></label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={input.mobile}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Your Mobile"
                                            maxLength="10" 
                                            pattern="[0-9]{10}"// Ensures only numbers are entered
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password <span className="text-danger">*</span></label>
                                        <div className="password-input-container" style={{ position: 'relative' }}>
                                            <input
                                                type={passwordVisible ? "text" : "password"}
                                                name="password"
                                                value={input.password}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                placeholder="Your Password"
                                                required
                                                style={{ paddingRight: '40px' }} 
                                            />
                                            <button
                                                type="button"
                                                className="eye-btn"
                                                onClick={togglePasswordVisibility}
                                                style={{
                                                    position: 'absolute',
                                                    right: '10px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)', 
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-check form-group">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="agree"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="agree">
                                            I agree with the <a href="#">Terms Of Service.</a>
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="theme-btn" disabled={loading}>
                                            {loading ? 'Registering...' : <><i className="far fa-paper-plane" /> Register</>}
                                        </button>
                                    </div>
                                </form>
                                <div className="login-footer">
                                    <p>Already have an account? <Link to="/users/login">Login.</Link></p>
                                    <div className="social-login">
                                        <span className="social-divider">or</span>
                                        <p>Continue with social media</p>
                                        <div className="social-login-list">
                                            <a href="#" className="fb-auth">
                                                <i className="fab fa-facebook-f" /> Facebook
                                            </a>
                                            <a href="#" className="gl-auth">
                                                <i className="fab fa-google" /> Google
                                            </a>
                                            <a href="#" className="tw-auth">
                                                <i className="fab fa-x-twitter" /> Twitter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;
