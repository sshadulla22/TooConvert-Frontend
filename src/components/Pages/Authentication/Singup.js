// Import React and useState hook
import React, { useState } from "react";

// Import CSS for styling the signup page
import "./signup.css";

// Signup functional component
const Signup = () => {

  // State to store form input values
  // email, password and confirmPassword are kept in one object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to store error message (used when passwords don't match)
  const [error, setError] = useState("");

  // This function runs whenever user types in any input field ..........
  const handleChange = (e) => {
    setFormData({
      ...formData,                 // Keep previous values
      [e.target.name]: e.target.value, // Update only the changed field
    });
  };

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if password and confirm password are same
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match"); // Show error message
      return; // Stop form submission
    }

    // Clear error if passwords match
    setError("");

    // Print form data (later this will be sent to backend API)
    console.log("Signup Data:", formData);

    // 👉 API call to Django backend will be added here
  };

  // JSX returned by the component (UI)
  return (
    // Main container to center the signup card
    <div className="container">

      {/* Signup card */}
      <div className="signup">
        <h1>Sign Up</h1>

        {/* Signup form */}
        <form className="signup-form" onSubmit={handleSubmit}>

          {/* Email input field */}
          <input
            required
            type="email"
            name="email"               // Name must match state key
            placeholder="Email"
            onChange={handleChange}    // Updates state on typing
          />

          {/* Password input field */}
          <input
            required
            type="password"
            name="password"            // Name must match state key
            placeholder="Password"
            onChange={handleChange}
          />

          {/* Confirm password input field */}
          <input
            required
            type="password"
            name="confirmPassword"     // Name must match state key
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {/* Show error message only if error exists */}
          {error && <p className="error">{error}</p>}

          {/* Submit button */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Login redirect link */}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

// Export Signup component so it can be used in routes
export default Signup;
