// Core
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './App.tsx';
// Styles
import './index.css';

// Provider
import Provider from './contexts/Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider >
      <App />
    </Provider>
  </StrictMode>
);