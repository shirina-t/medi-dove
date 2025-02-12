import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import "./utils/i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>
  </StrictMode>
);
