import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MobileProvider } from './context/nav_context';
import { ProductsProvider } from './context/product_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <MobileProvider>
          <App />
      </MobileProvider>
    </ProductsProvider>
  </React.StrictMode>
);

