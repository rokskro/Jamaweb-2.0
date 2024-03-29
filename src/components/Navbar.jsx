// eslint-disable-next-line no-unused-vars
import React from "react"; 
import { Link } from "react-router-dom"; 
import '../css/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img className="navbar-logo" src="/Jamazon1.png" alt="..." />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Products">Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                          {/* Dropdown related code */}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Orders">Orders</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search products" />
                        <button className="btn amazonButton" type="submit">
                          Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
} 