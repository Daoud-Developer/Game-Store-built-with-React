import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './Resources/fonts/walsheim/GTWalsheimPro-Medium.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Regular.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Light.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Bold.ttf';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
