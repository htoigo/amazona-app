import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/"> ☰ </Link>     {/* &#x2630; */}
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge"> {cartItems.length} </span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>

        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>

        <footer className="row center"> © 2020 All rights reserved. </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
