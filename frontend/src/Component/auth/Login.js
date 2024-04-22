import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Remove Form import
import axios from "axios";
import dcc1 from "../images/dcc1.png"
import toast from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    };
    const userData = { email, password };
    axios
      .post(
        "http://localhost:5000/user/login", userData,
        { headers },
    
      )
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("token", res.data.token);
          console.log(res.data.token)
          if (res.data.role === "admin") {
            navigate("/admindash");
          } else if (res.data.role === "manager") {
            navigate("/managerdash");
          } else if (res.data.role === "siteeng") {
            navigate("/siteengdash");
          } else {
            navigate("/clientdash");
          }
        } else {
          toast("Login failed: " + res.data);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login error: " + err.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5  bg-white shadow box-area p-5 py-5">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box p-5"
          style={{ background: "#103cbe" }}
        >
          <div className="featured-image mb-3">
            <img
              src={dcc1}
              className="img-fluid"
              style={{ width: "5em"}}
              alt="featured"

            />
          </div>
          <p className="text-white fs-2">Be Verified</p>
          <small className="text-white text-wrap text-center pb-4">
            DYNAMIC CONCRETE CONSULTANCY
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-center">
              <h2>Hello, Login Please</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleSubmit}> {/* Use standard form element */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  autoComplete="off"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between"></div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </form>
            <div className="forgot">
              <Link to="/contact">
                <small>
                  Don't have an account? || Forgot Password -Contact Admin
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
