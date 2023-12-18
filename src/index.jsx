import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_components/app/App';
import ThemeProvider from './_providers/ThemeProvider';

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> 
    </ThemeProvider>
  </React.StrictMode>
);

