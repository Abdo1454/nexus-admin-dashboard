import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg bg-white border-bottom shadow-sm  sticky-top w-100 "   style={{ zIndex: 1030 }}
>
      <div className="container-fluid px-4">

        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand fw-bold text-dark"
        >
        <img src={Logo} alt="Logo" className="me-2 " style={{ width: '40px', height: '40px' }} />
          Nexus Admin
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          {/* Main Navigation */}
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/company">
                Company
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/docs">
                Docs
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">

            <Link
              to="/signin"
              className="btn btn-outline-dark"
            >
              Sign In
            </Link>

            <Link
              to="/login"
              className="btn btn-outline-primary"
            >
              Login
            </Link>

            <Link
              to="/get-started"
              className="btn btn-primary"
            >
              Get Started
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;