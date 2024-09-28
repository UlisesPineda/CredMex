import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </React.StrictMode>,
)
