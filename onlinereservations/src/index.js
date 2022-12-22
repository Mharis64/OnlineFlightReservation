

import React from 'react';

import ReactDOM from 'react-dom/client';

            

import App from './App';

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from 'react-router-dom';
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link> 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);


