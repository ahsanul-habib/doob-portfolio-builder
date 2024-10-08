import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDev from './AppDev';
import AppProd from './AppProd';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppDev />
  </React.StrictMode>
);
reportWebVitals();
