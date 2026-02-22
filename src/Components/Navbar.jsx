import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div>📞 9686111919 9686700500 9686800700</div>

        <div className="social">
          <span>▶  </span>
          <span>f  </span>
          <span>in  </span>
          <span>X  </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        {/* Logo (text only) */}
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