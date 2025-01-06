import React, { useState } from "react";
import './../App.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 
  const [showCPassword, setShowCPassword] = useState(false); 

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) newErrors.name = "Name is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    // Username validation
    if (!formData.username) newErrors.username = "Username is required";
    else if (/\s/.test(formData.username))
      newErrors.username = "Username must not contain spaces";

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be at least 8 characters long, contain one lowercase letter, one uppercase letter, one digit, and one special character";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3 position-relative">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3 position-relative">
          <label className="form-label">Confirm Password</label>
          <div className="input-group">
            <input
              type={showCPassword ? "text" : "password"}
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowCPassword(!showCPassword)}
            >
              {showCPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
