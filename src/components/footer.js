import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <h3>Categories</h3>
          <ul>
            <li>Clothing</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>Electronics</li>
          </ul>
        </div>
        <div className="footer__row">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer__row">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer__row">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;