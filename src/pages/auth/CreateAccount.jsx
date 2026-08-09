import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

function CreateAccount() {
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
        style={{ width: "120px" }}
      />

      <div className="card shadow-sm border-0 p-4" style={{ width: "420px" }}>
        {/* Title */}
        <h2 className="text-center mb-2">Create Account</h2>

        <p className="text-center text-muted mb-4">
          Create your account to get started
        </p>

        {/* Form */}
        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              className="form-control"
              placeholder="Confirm your password"
            />
          </div>

          {/* Create Account Button */}
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;

