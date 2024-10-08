import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // New state to track success or failure
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };

    try {
      const res = await axios.post(
        "https://backendauth-zfm0.onrender.com/api/user/register-user",
        payload
      );
      setMsg(res.data.message);
      setIsSuccess(true); // Set to true on success

      // Set a 3-second timeout before navigating to the login page
      setTimeout(() => {
        navigate("/login");
      }, 1000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.log(error);
      setMsg(error.response?.data?.message || "An error occurred");
      setIsSuccess(false); // Set to false on failure
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Enter your Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {/* Conditionally apply text-primary for success or text-danger for failure */}
        {msg && (
          <h1
            className={`text-center ${
              isSuccess ? "text-primary" : "text-danger"
            }`}
          >
            {msg}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Register;
