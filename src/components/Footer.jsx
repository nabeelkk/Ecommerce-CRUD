import React from "react";
import "./Footer.css"; // make sure path is correct

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Blend Fashion</h2>
          <p>
            Discover premium styles with comfort and elegance. Made for true fashion lovers.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Bangalore, IN</p>
          <p>Email: mohammednabeelkk.tkl@gmail.com</p>
          <p>Phone: +91 80892 22453</p>

          <div className="footer-social" aria-label="social links">
            <a href="#" aria-label="website">🌐</a>
            <a href="#" aria-label="twitter">🐦</a>
            <a href="#" aria-label="facebook">📘</a>
            <a href="#" aria-label="instagram">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} <strong>Blend Fashion</strong>. All rights reserved.
      </div>
    </footer>
  );
}
