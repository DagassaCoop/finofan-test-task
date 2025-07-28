// Core
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './App.tsx';
// Styles
import './index.css';

// Providers
import { ThemeProvider } from './contexts/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <App />
    </ThemeProvider>
  </StrictMode>
);