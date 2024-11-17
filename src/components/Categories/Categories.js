import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <nav className="categories">
      <a href="/clothing-shoes">Clothing & Shoes</a>
      <a href="/electronics">Electronics</a>
      <a href="/books">Books</a>
      <a href="/food-drinks">Food & Drinks</a>
      <a href="/appliances">Appliances</a>
      <a href="/sports-outdoor">Sports & Outdoor</a>
      <a href="/toys-baby">Toys & Baby</a>
      <a href="/garden">Garden</a>
    </nav>
  );
}

export default Categories;