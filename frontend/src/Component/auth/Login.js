import React from 'react';
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
          <div className="featured-image mb-3">
            <img src="images/1.png" className="img-fluid" style={{ width: '250px' }} alt="featured" />
          </div>
          <p className="text-white fs-2" >Be Verified</p>
          <small className="text-white text-wrap text-center pb-4" >DYNAMIC CONCRETE CONSULTANCY</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-center">
              <h2>Hello, Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
            </div>
            <div className="input-group mb-1">
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
            </div>
            <div className="forgot"><Link to='/contact'>
                <small>Forgot Password? Contact Admin</small>
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
