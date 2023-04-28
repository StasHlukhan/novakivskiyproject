import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18/i18next'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
    
  
);


reportWebVitals();
