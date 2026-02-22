import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;