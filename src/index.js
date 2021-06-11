import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,HashRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>  
<HashRouter>
  <App />
</HashRouter>
</React.StrictMode>,

document.getElementById('root'));

reportWebVitals();
