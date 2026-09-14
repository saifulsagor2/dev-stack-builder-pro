import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              DS
            </div>

            <span>Dev Stack</span>
          </div>

          <p>
            Build better projects with the right
            technologies for your development stack.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Product</h3>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#">
              Projects
            </a>

            <a href="#">
              Features
            </a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

            <a href="#">
              Careers
            </a>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Cookie Policy
            </a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;