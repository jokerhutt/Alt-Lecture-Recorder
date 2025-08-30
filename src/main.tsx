import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NiceModal from '@ebay/nice-modal-react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NiceModal.Provider>
    <App />
    </NiceModal.Provider>
  </StrictMode>,
)
