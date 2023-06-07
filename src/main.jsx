import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pointer from './components/components/Pointer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App className="app"/>
      <Pointer />
      <div className="email">
        <a href="">grigerratia@gmail.com</a>
        <hr />
      </div>
    </>
  </React.StrictMode>,
)
