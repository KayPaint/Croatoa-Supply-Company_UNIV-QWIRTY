import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <section>
        <div className="footer-section">
          <h2>Customer Care</h2>
          <a href="">Account</a>
          <a href="">Orders</a>
          <a href="">Policies</a>
          <a href="">Credit</a>
          <a href="">Help</a>
        </div>
      </section>
      <section>
        <div className="footer-section">
          <h2>Sales</h2>
          <a href="">Become a Seller</a>
          <a href="">Manage Your Products</a>
          <a href="">Advertise</a>
        </div>
      </section>
      <section>
        <div className="footer-section">
          <h2>About Us</h2>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">Our History</a>
          <a href="">Press Releases</a>
          <a href="">Take a Tour</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;