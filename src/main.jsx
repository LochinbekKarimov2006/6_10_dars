import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.js"
import { GlobalContextProvider } from './components/GlobalContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
