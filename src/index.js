import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//Context
import { GalleryProvider } from './context/GalleryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
