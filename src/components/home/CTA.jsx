function CTA() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">

        <div className="bg-primary rounded-4 shadow-lg overflow-hidden">
          <div className="row align-items-center">

            {/* Content */}
            <div className="col-lg-8">
              <div className="p-4 p-md-5 text-white">

                <span className="badge bg-white text-primary rounded-pill px-3 py-2 mb-3">
                  Get Started Today
                </span>

                <h2 className="display-6 fw-bold mb-3">
                  Ready to take control of your business?
                </h2>

                <p className="lead mb-4 opacity-75">
                  Bring your products, customers, orders, and analytics
                  together with Nexus.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3">

                  <a
                    href="/dashboard"
                    className="btn btn-light btn-lg px-4 fw-semibold"
                  >
                    Start Free Trial
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>

                  <a
                    href="#features"
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    Explore Features
                  </a>

                </div>

                <div className="d-flex flex-wrap gap-4 mt-4 small opacity-75">

                  <span>
                    <i className="bi bi-check-circle me-2"></i>
                    No credit card required
                  </span>

                  <span>
                    <i className="bi bi-check-circle me-2"></i>
                    Easy setup
                  </span>

                  <span>
                    <i className="bi bi-check-circle me-2"></i>
                    Cancel anytime
                  </span>

                </div>

              </div>
            </div>

            {/* Visual */}
            <div className="col-lg-4 d-none d-lg-block">
              <div className="p-5">

                <div className="bg-white rounded-4 shadow p-4">

                  <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                      <small className="text-muted">
                        Monthly Revenue
                      </small>

                      <h4 className="fw-bold mb-0">
                        $48,290
                      </h4>
                    </div>

                    <div className="text-success">
                      <i className="bi bi-graph-up-arrow fs-4"></i>
                    </div>

                  </div>

                  <div className="d-flex align-items-end gap-2" style={{ height: "100px" }}>

                    {[35, 50, 42, 65, 55, 78, 90].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="bg-primary rounded-top flex-fill"
                          style={{
                            height: `${height}%`,
                            opacity: 0.35 + index * 0.08,
                          }}
                        ></div>
                      )
                    )}

                  </div>

                  <div className="border-top mt-3 pt-3">
                    <small className="text-success fw-semibold">
                      +18.4%
                    </small>

                    <small className="text-muted ms-2">
                      vs last month
                    </small>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;