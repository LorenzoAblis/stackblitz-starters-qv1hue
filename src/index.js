import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
    <Toaster
      toastOptions={{
        success: {
          duration: 2000,
          position: 'top-right',
        },
        error: {
          duration: 4000,
          position: 'top-right',
        },
      }}
    />
  </StrictMode>
);
