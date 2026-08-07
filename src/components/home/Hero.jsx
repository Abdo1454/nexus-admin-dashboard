import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center min-vh-75 g-5">

          {/* Hero Content */}
          <div className="col-lg-6">
            <div className="hero-content">

              {/* Badge */}
              <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 mb-4">
                ✦ Nexus v2.0 is now live
              </span>

              {/* Heading */}
              <h1 className="display-3 fw-bold lh-sm mb-4">
                Empower Your Business with{" "}
                <span className="text-primary">
                  Nexus Admin
                </span>
              </h1>

              {/* Description */}
              <p className="lead text-secondary mb-4">
                The all-in-one management platform designed for
                high-growth SaaS teams. Precision engineered for
                performance, clarity, and scale.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">

                <Link
                  to="/dashboard"
                  className="btn btn-primary btn-lg px-4"
                >
                  Start Free Trial
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/demo"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Demo
                </Link>

              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="col-lg-6">

            <div className="hero-image-wrapper position-relative">

              {/* Dashboard Preview */}
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-header bg-white border-0 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="rounded-circle bg-danger"
                      style={{ width: "8px", height: "8px" }}
                    ></span>

                    <span
                      className="rounded-circle bg-warning"
                      style={{ width: "8px", height: "8px" }}
                    ></span>

                    <span
                      className="rounded-circle bg-success"
                      style={{ width: "8px", height: "8px" }}
                    ></span>
                  </div>
                </div>

                <div className="p-4 bg-light">

                  <div className="row g-3">

                    <div className="col-4">
                      <div className="bg-white rounded-3 p-3 shadow-sm">
                        <small className="text-muted">
                          Revenue
                        </small>

                        <h5 className="fw-bold mt-2 mb-0">
                          $24,590
                        </h5>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="bg-white rounded-3 p-3 shadow-sm">
                        <small className="text-muted">
                          Orders
                        </small>

                        <h5 className="fw-bold mt-2 mb-0">
                          1,284
                        </h5>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="bg-white rounded-3 p-3 shadow-sm">
                        <small className="text-muted">
                          Customers
                        </small>

                        <h5 className="fw-bold mt-2 mb-0">
                          8,942
                        </h5>
                      </div>
                    </div>

                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white rounded-3 p-4 mt-3 shadow-sm">
                    <div className="d-flex justify-content-between mb-4">
                      <strong>Revenue Overview</strong>
                      <span className="text-success">
                        +24.8%
                      </span>
                    </div>

                    <div
                      className="d-flex align-items-end gap-2"
                      style={{ height: "150px" }}
                    >
                      {[45, 70, 55, 85, 65, 100, 80].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="bg-primary rounded-top flex-fill"
                            style={{
                              height: `${height}%`,
                              opacity: 0.5 + index * 0.07,
                            }}
                          ></div>
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Growth Card */}
              <div
                className="position-absolute bg-white shadow rounded-3 p-3"
                style={{
                  right: "-20px",
                  bottom: "20px",
                }}
              >
                <small className="text-muted d-block">
                  Revenue Growth
                </small>

                <strong className="text-success">
                  +24.8%
                </strong>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;