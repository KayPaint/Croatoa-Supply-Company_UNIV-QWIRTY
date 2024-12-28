import React from 'react';
import { Header } from '../header/header.js';
import { Footer } from '../footer/footer.js';

export const Layout = () => {
    return (
        <div>
            <Header />
            <main>
        <nav class="categories">
          <a href="/clothing-shoes">clothing & shoes</a>
          <a href="/electronics">electronics</a>
          <a href="/books">books</a>
          <a href="/food-drinks">food & drinks</a>
          <a href="/appliances">appliances</a>
          <a href="/sports-outdoor">sports & outdoor</a>
          <a href="/toys-baby">toys & baby</a>
          <a href="/garden">garden</a>
        </nav>
        <section class="items">
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?1" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?2" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?3" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?4" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?5" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?6" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?7" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?8" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?9" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?10" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?11" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
          <div class="item">
            <h3 class="item-name"><span>Product Name</span><i class="add-item material-icons">add_shopping_cart</i></h3>
            <img class="item-image" src="http://placeimg.com/240/200/tech?12" alt="product-name" />
            <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus facere fuga aliquam, accusamus quisquam quae temporibus tenetur rerum consequatur numquam blanditiis neque! Molestias, nobis sapiente vero maxime tempora illum!</p>
            <p class="fact-line"><span class="fact-name">Price:</span><span>$27.99</span></p>
          </div>
        </section>
      </main>
            <Footer />
        </div>
    );
};