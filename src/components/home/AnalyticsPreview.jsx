function AnalyticsPreview() {
  const stats = [
    {
      label: "Total Revenue",
      value: "$128,430",
      change: "+18.4%",
      icon: "bi bi-currency-dollar",
    },
    {
      label: "Total Orders",
      value: "8,942",
      change: "+12.8%",
      icon: "bi bi-cart3",
    },
    {
      label: "Customers",
      value: "24,580",
      change: "+21.3%",
      icon: "bi bi-people",
    },
  ];

  const bars = [45, 65, 52, 78, 61, 88, 72, 94, 80, 100, 86, 96];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">

        {/* Section Header */}
        <div className="row align-items-end mb-5">
          <div className="col-lg-7">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
              Powerful Analytics
            </span>

            <h2 className="display-6 fw-bold mt-3 mb-3">
              Understand your business at a glance.
            </h2>

            <p className="text-muted mb-0">
              Turn your business data into actionable insights with
              powerful analytics designed for modern teams.
            </p>
          </div>

          <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
            <span className="text-muted small">
              Real-time business intelligence
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

          {/* Header */}
          <div className="card-header bg-white border-bottom p-4">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5 className="fw-bold mb-1">
                  Business Overview
                </h5>

                <small className="text-muted">
                  Last 12 months
                </small>
              </div>

              <button className="btn btn-light btn-sm">
                This Year
                <i className="bi bi-chevron-down ms-2"></i>
              </button>

            </div>
          </div>

          <div className="card-body p-4">

            {/* Stats */}
            <div className="row g-3 mb-4">

              {stats.map((stat) => (
                <div
                  className="col-12 col-md-4"
                  key={stat.label}
                >
                  <div className="bg-light rounded-4 p-3">

                    <div className="d-flex justify-content-between align-items-start">

                      <div>
                        <small className="text-muted">
                          {stat.label}
                        </small>

                        <h4 className="fw-bold mt-2 mb-1">
                          {stat.value}
                        </h4>

                        <small className="text-success fw-semibold">
                          {stat.change}
                        </small>
                      </div>

                      <div
                        className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                      >
                        <i className={stat.icon}></i>
                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* Chart */}
            <div className="border rounded-4 p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                  <h6 className="fw-bold mb-1">
                    Revenue Growth
                  </h6>

                  <small className="text-muted">
                    Monthly revenue performance
                  </small>
                </div>

                <div className="text-end">
                  <h5 className="fw-bold mb-0">
                    $128,430
                  </h5>

                  <small className="text-success">
                    +18.4%
                  </small>
                </div>

              </div>

              {/* Bars */}
              <div
                className="d-flex align-items-end gap-2"
                style={{ height: "220px" }}
              >
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-fill bg-primary rounded-top"
                    style={{
                      height: `${height}%`,
                      opacity: 0.35 + index * 0.05,
                    }}
                  ></div>
                ))}
              </div>

              {/* Months */}
              <div className="d-flex justify-content-between mt-3">

                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <small
                    key={month}
                    className="text-muted"
                  >
                    {month}
                  </small>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AnalyticsPreview;