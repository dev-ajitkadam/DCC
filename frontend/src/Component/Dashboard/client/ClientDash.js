import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Reports from "./Reports";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ClientDash() {
    const [nav, setNav] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <div className="p-0">
        <div className="row">
          <div className={`col-md-3 vh-100 d-md-flex flex-column flex-shrink-0  bg-custom-color ${sidebarOpen ? "sidebar" : ""} `}>
            <div className="d-md-flex flex-column flex-shrink-0 p-3 bg-custom-color vh-100">
              <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-white">Client Dashboard</span>
              </Link>
              <hr  className=" text-white size-3"/>
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <Link onClick={() => setNav("home")} className={`nav-link text-white ${nav === "home" && "active"}`}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#home"></use>
                    </svg>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setNav("reports")} className={`nav-link text-white ${nav === "reports" && "active"}`}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    Reports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setNav("adduser")} className={`nav-link text-white ${nav === "adduser" && "active"}`}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#table"></use>
                    </svg>
                    Add User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setNav("userlist")} className={`nav-link text-white ${nav === "userlist" && "active"}`}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#grid"></use>
                    </svg>
                    User List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setNav("products")} className={`nav-link text-white ${nav === "products" && "active"}`}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#people-circle"></use>
                    </svg>
                    Products
                  </Link>
                </li>
              </ul>
              <hr />
              <button className="btn btn-danger">Logout</button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="col">
              <div className="row">
                <div className="h-10">
                  <Container>
                    <Navbar expand="lg" className="bg-body-tertiary mt-2 form-control-lg ml-2 mr-2">
                      <Form className="d-flex flex-grow-1 ">
                        <Navbar.Brand onClick={toggleSidebar}>
                          {sidebarOpen ? <i className="bi bi-chevron-left"></i> : <i className="bi bi-list fs-4"></i>}
                        </Navbar.Brand>
  
  
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2 flex-grow-1"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </Navbar>
                  </Container>
                </div>
                <div className="h-90">
                  {nav === "home" && <AddUser />}
                  {nav === "reports" && <Reports />}
                  {nav === "adduser" && <AddUser />}
                  {nav === "userlist" && <UserList />}
                  {nav === "products" && <div>Products Component</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ClientDash;
