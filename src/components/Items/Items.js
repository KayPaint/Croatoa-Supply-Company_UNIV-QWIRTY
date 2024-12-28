import React from 'react';
import './Items.css';

const itemData = [
  { id: 1, name: 'Product Name', image: 'http://placeimg.com/240/200/tech?1', price: '$27.99' },
  { id: 2, name: 'Product Name', image: 'http://placeimg.com/240/200/tech?2', price: '$27.99' },
  // ... add more items as needed
];

function Items() {
  return (
    <section className="items">
      {itemData.map(item => (
        <div className="item" key={item.id}>
          <h3 className="item-name">
            <span>{item.name}</span>
            <i className="add-item material-icons">add_shopping_cart</i>
          </h3>
          <img className="item-image" src={item.image} alt={item.name} />
          <p className="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam,
            accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias,
            nobis sapiente vero maxime tempora illum!
          </p>
          <p className="fact-line">
            <span className="fact-name">Price:</span><span>{item.price}</span>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Items;