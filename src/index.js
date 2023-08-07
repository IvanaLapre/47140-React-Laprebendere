import React from 'react';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
