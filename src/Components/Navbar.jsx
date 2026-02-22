import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Orange Bar */}
      <div className="topbar">
        <div className="top-left">
          Subhodeep Bada
        </div>

        <div className="top-right">
          <span>▶</span>
          <span>f</span>
          <span>in</span>
          <span>X</span>
          <span>◎</span>
          <span>☏</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo">

          <span className="logo-text">
            Education<span>4All✏️</span>
          </span>
          
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;