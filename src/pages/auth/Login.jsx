
import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="bg-light d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Nexus Admin Logo"
        className="mb-4"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />

      {/* Title */}
      <h1 className="text-dark fw-bold mb-2">
        Welcome back
      </h1>

      <p className="text-muted mb-4">
        Sign in to the Nexus Dashboard
      </p>

      {/* Login Form */}
      <form
        className="bg-white p-5 rounded-4 shadow-sm d-flex flex-column gap-3"
        style={{
          width: "400px",
          maxWidth: "90%",
        }}
      >
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="form-label fw-semibold text-dark"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="form-label fw-semibold text-dark"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control"
            required
          />
        </div>

        {/* Login */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>

        {/* Create Account */}
        <div className="text-center mt-2">
          <span className="text-muted">
            Don't have an account?{" "}
          </span>

          <Link
            to="/create-account"
            className="text-primary text-decoration-none fw-semibold"
          >
            Create one
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

