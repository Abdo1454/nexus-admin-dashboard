import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-white">

      {/* Main Footer */}
      <div className="container py-5">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4">

            <Link
              to="/"
              className="d-flex align-items-center text-white text-decoration-none fw-bold fs-5 mb-3"
            >
              <img
                src={Logo}
                alt="Nexus Admin Logo"
                className="me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />

              Nexus Admin
            </Link>

            <p className="text-white-50 lh-lg mb-4">
              The all-in-one management platform designed to help
              modern businesses manage their products, customers,
              orders, and analytics from one powerful workspace.
            </p>

            {/* Social Links */}
            <div className="d-flex gap-2">

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

            </div>

          </div>

          {/* Product */}
          <div className="col-6 col-lg-2">

            <h6 className="fw-bold mb-4">
              Product
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3">

              <li>
                <Link
                  to="/features"
                  className="text-white-50 text-decoration-none"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-white-50 text-decoration-none"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="text-white-50 text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-white-50 text-decoration-none"
                >
                  Resources
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div className="col-6 col-lg-2">

            <h6 className="fw-bold mb-4">
              Company
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3">

              <li>
                <Link
                  to="/company"
                  className="text-white-50 text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/company"
                  className="text-white-50 text-decoration-none"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/company"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/company"
                  className="text-white-50 text-decoration-none"
                >
                  Partners
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div className="col-6 col-lg-2">

            <h6 className="fw-bold mb-4">
              Resources
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3">

              <li>
                <Link
                  to="/docs"
                  className="text-white-50 text-decoration-none"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-white-50 text-decoration-none"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-white-50 text-decoration-none"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-white-50 text-decoration-none"
                >
                  Guides
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div className="col-6 col-lg-2">

            <h6 className="fw-bold mb-4">
              Legal
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3">

              <li>
                <Link
                  to="/privacy"
                  className="text-white-50 text-decoration-none"
                >
                  Privacy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-white-50 text-decoration-none"
                >
                  Terms
                </Link>
              </li>

              <li>
                <Link
                  to="/security"
                  className="text-white-50 text-decoration-none"
                >
                  Security
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-top border-secondary">

        <div className="container py-4">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} Nexus Admin. All rights reserved.
            </p>

            <div className="d-flex gap-4">

              <Link
                to="/privacy"
                className="text-white-50 small text-decoration-none"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-white-50 small text-decoration-none"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

