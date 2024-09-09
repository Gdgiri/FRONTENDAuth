import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); // State for the message
  const [isSuccess, setIsSuccess] = useState(null); // New state to track success or failure
  const navigate = useNavigate();

  // Declare the handleSubmit function as async
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const res = await axios.post(
        "https://backendauth-zfm0.onrender.com/api/user/login-user",
        payload
      );
      setMsg(res.data.message);
      setIsSuccess(true); // Set success to true if the request is successful

      // Set a timeout of 3 seconds before navigating to the landing page
      setTimeout(() => {
        navigate("/landing");
      }, 3000);
    } catch (error) {
      console.log(error);
      setMsg(error.response?.data?.message || "An error occurred");
      setIsSuccess(false); // Set success to false if the request fails
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {/* Display the message with conditional color */}
        {msg && (
          <h2
            className={`text-center ${
              isSuccess ? "text-primary" : "text-danger"
            }`}
          >
            {msg}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Login;
