import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MobileProvider } from './context/nav_context';
import { ProductsProvider } from './context/product_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
        <MobileProvider>
            <App />
        </MobileProvider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);

