import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { installUltraFastSmoothScroll } from './utils/smoothScroll'

// Install ultra-fast smooth scrolling on client
if (typeof window !== 'undefined') {
  // run after a short idle so it doesn't block first paint
  window.requestIdleCallback?.(() => installUltraFastSmoothScroll());
  // fallback
  setTimeout(() => installUltraFastSmoothScroll(), 500);
}

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
