import React from 'react';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Categories />
        <Items />
      </main>
      <Footer />
    </div>
  );
}

export default App;