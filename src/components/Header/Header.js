import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <ul className="horizontal nav-list">
          <li><a href="/big_deals">Big Deals</a></li>
          <li><a href="/top_brands">Top Brands</a></li>
          <li><a href="/suggestions">Suggestions</a></li>
          <li><a href="/help_contact">Help & Contact</a></li>
        </ul>
        <ul className="horizontal nav-list full-width">
          <li><a href="/log_in">Log In/Sign Up</a></li>
          <li><a href="/me">Account</a></li>
          <li><a href=""><i className="material-icons">shopping_cart</i></a></li>
        </ul>
        <ul className="horizontal nav-list short-width">
          <li><a href=""><i className="material-icons">menu</i></a></li>
        </ul>
      </nav>
      <nav className="sub-nav">
        <span className="company-name">
          <i>Croatoa Supply Company</i>
        </span>
        <form className="search-form" action="/search">
          <input type="text" name="search-term" placeholder="search" />
          <button type="submit"><i className="material-icons">search</i></button>
        </form>
        <span className="credit-offer-box">
          <a className="credit-offer" href="/credit">0% Financing 24 Months</a>
        </span>
      </nav>
    </header>
  );
}

export default Header;