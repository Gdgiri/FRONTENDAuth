import React from "react";

const LandingPgae = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <img
            src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-501.gif"
            alt="welcome"
            className="welcome"
          />
          <h1 className="text-center mb-4">
            Welcome to the <strong className="text-danger">LandingPage!</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPgae;
