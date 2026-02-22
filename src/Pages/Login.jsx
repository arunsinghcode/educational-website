import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;