
function Hero() {
  return (
    <div>
        <section className="hero-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-3">Welcome to Nexus Admin</h1>
                        <p className="lead mb-4">A modern and responsive admin dashboard template built with React and Bootstrap 5.</p>

                        <a href="/dashboard" className="btn btn-primary btn-lg">Get Started</a>
                    </div>
                    <div className="col-lg-6">
                        {/* <img src={heroImg} alt="Hero" className="img-fluid" /> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero