import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Your custom styles (optional)

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const details = props.data1;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger position-fixed top-0 start-0 w-100 z-3 px-3">
      {details.map((x, index) => (
        <div className="container-fluid" key={index}>
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={x.img1} alt="logo" width="160" height="45" />
          </Link>

          {/* Toggler Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white fs-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link text-white fs-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Services"
                  className="nav-link text-white fs-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  className="nav-link text-white fs-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  className="nav-link text-white fs-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
