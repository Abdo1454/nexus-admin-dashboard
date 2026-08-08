function Testimonials() {
  const testimonials = [
    {
      name: "Michael Carter",
      role: "CEO, Nova Commerce",
      initials: "MC",
      quote:
        "Nexus completely changed the way we manage our business. Everything is organized in one place and our team can make faster decisions.",
    },
    {
      name: "Sarah Mitchell",
      role: "Operations Manager, Vertex",
      initials: "SM",
      quote:
        "The dashboard is clean, intuitive, and incredibly easy to use. We spend less time managing data and more time growing the business.",
    },
    {
      name: "Daniel Wilson",
      role: "Founder, Elevate Labs",
      initials: "DW",
      quote:
        "Nexus gives us a clear picture of our revenue, customers, products, and orders. It has become an essential part of our daily workflow.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">

        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">

            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
              Customer Stories
            </span>

            <h2 className="display-6 fw-bold mt-3 mb-3">
              Trusted by teams that want to grow.
            </h2>

            <p className="text-muted lead mb-0">
              See how modern teams use Nexus to simplify operations,
              understand their data, and make better business decisions.
            </p>

          </div>
        </div>

        {/* Testimonials */}
        <div className="row g-4">

          {testimonials.map((testimonial) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={testimonial.name}
            >
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4">

                {/* Stars */}
                <div className="text-warning mb-4">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                {/* Quote */}
                <p className="text-muted lh-lg mb-4">
                  “{testimonial.quote}”
                </p>

                {/* User */}
                <div className="d-flex align-items-center mt-auto">

                  <div
                    className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      {testimonial.name}
                    </h6>

                    <small className="text-muted">
                      {testimonial.role}
                    </small>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;