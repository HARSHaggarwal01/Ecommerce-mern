import React, { useEffect, useState } from 'react';
import { API_URL, BASE_URL } from '../../constants/contant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setUserData,setToken} from "../../features/AuthSlice.js";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {

    const { token } = useSelector((state) => ({
        token: state.auth.token
    }));
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate('/', { replace: true });
    }, [token, navigate]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        if (password.length < 8) {
            setError('Please enter a minimum 8 character password');
            return;
        }

        const loginData = {
            email,
            password,
        };

        axios.post(`${BASE_URL}${API_URL.login}`, loginData)
        .then((response) => {
            
            dispatch(setUserData(response.data.user));
            dispatch(setToken(response.data.token));

            toast.success(response.data.message);

            setEmail('');
            setPassword('');
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setError(error.response.data.message);
            setLoading(false);
        });
    };

    return (
        <main className="main">
        <div className="login-area py-90">
            <div className="container">
            <div className="col-md-7 col-lg-5 mx-auto">
                <div className="login-form">
                <div className="login-header">
                    <img src="/public/assets/img/logo/logo.png" alt="" />
                    <p>Login with your medica account</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                    <label>Email Address</label>
                    <input
                        onChange={(e) => {setEmail(e.target.value)
                            setError(error);
                        }}
                        type="email"
                        value={email}
                        className="form-control"
                        placeholder="Your Email"
                    />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => {
                        setPassword(e.target.value);
                        e.target.value.length < 8 
                            ? setError('Please enter a minimum 8 character password')
                            : setError(error);
                        }}
                        value={password}
                        className="form-control"
                        placeholder="Your Password"
                    />
                    {error && (
                        <small style={{ color: 'red' }}>{error}</small>
                    )}
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                        <input
                        type="checkbox"
                        id="remember"
                        className="form-check-input"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        required
                        />
                        <label className="form-check-label" htmlFor="remember">
                        Remember Me
                        </label>
                    </div>
                    <a href="forgot-password.html" className="forgot-pass">
                        Forgot Password?
                    </a>
                    </div>
                    <div className="d-flex align-items-center">
                    <button type="submit" className="theme-btn" disabled={loading}>
                        {loading ? 'Logging in...' : <><i className="far fa-sign-in" /> Login</>}
                    </button>
                    </div>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/users/register">Register.</Link></p>
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
    );
};

export default Login;
