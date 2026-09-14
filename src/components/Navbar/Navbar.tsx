import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">DS</div>
          <span>Dev Stack</span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;