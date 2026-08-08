import React from 'react'

function Capabilities() {
      const capabilities = [
    {
      icon: "bi bi-bar-chart-line",
      title: "Advanced Analytics",
      description:
        "Track revenue, growth, conversions, and business performance with clear real-time insights.",
    },
    {
      icon: "bi bi-box-seam",
      title: "Product Management",
      description:
        "Manage products, pricing, inventory, categories, and stock levels from one powerful workspace.",
    },
    {
      icon: "bi bi-people",
      title: "Customer CRM",
      description:
        "Understand your customers through profiles, order history, activity, and lifetime spending.",
    },
    {
      icon: "bi bi-cart-check",
      title: "Order Management",
      description:
        "Track orders from processing to delivery with organized statuses and detailed order information.",
    },
    {
      icon: "bi bi-shield-check",
      title: "Secure Access",
      description:
        "Protect your administration platform with authentication, protected routes, and secure account controls.",
    },
    {
      icon: "bi bi-phone",
      title: "Responsive Design",
      description:
        "Access your business dashboard comfortably across mobile, tablet, and desktop devices.",
    },
  ];
  return (
    <div>
        <section className="py-5 bg-light">
             <div className="container py-5">

        {/* Section Header */}
        <div className="row align-items-end mb-5">
          <div className="col-lg-4">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
              Powerful Capabilities
            </span>
          </div>
          <div className="col-lg-8">
            <h2 className="display-6 fw-bold mt-3 mb-3">
              Everything you need to run your business.
            </h2>
            <p className="text-muted lead mb-0">
              Nexus brings your most important business operations together
              in one modern, intelligent, and easy-to-use platform.
            </p>
          </div>
        </div>
        </div>
      {
capabilities.map((capability, index) => (
          <div
            key={index}
            className={`row align-items-center py-5 ${index % 2 === 0 ? "" : "bg-white"}`}
          >
            <div className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-2"}`}>
              <div className="text-center text-lg-start">
                <i className={`${capability.icon} fs-1 text-primary mb-3`}></i>
                <h3 className="fw-bold mb-3">{capability.title}</h3>
                <p className="text-muted mb-0">{capability.description}</p>
              </div>
            </div>
            <div className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-1"}`}>
              <div className="text-center">
             
              </div>
            </div>
          </div>
        ))
      }
      
        </section>
    </div>
  )
}

export default Capabilities

 