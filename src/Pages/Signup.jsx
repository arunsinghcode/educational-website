import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create Account</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
        </div>

        <button className="signup-btn">Signup</button>

        <p className="login-text">
         Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;