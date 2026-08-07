function TrustedCompanies() {
  const companies = [
    "Acme",
    "Vertex",
    "Nova",
    "Orbit",
    "Luma",
  ];

  return (
    <section className="py-5 border-top border-bottom bg-white">
      <div className="container">

        <p className="text-center text-muted small mb-4">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>

        <div className="row justify-content-center align-items-center g-4">
          {companies.map((company) => (
            <div
              key={company}
              className="col-6 col-md text-center"
            >
              <span className="fs-5 fw-semibold text-secondary">
                {company}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;