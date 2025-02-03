import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Calculator from './Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className='main'>
    <header className="calculator-header" style={{color: 'orange', textShadow: '0px 0px 3px green'}}>
        <h1>Welcome to the Calculator</h1>
       
      </header>
    <Calculator/>
     {/* Footer Section */}
     <footer className="calculator-footer">
     <p style={{color: 'yellowgreen', textShadow: '0px 0px 0px yellow'}} >Created with ❤️ by Debasish...</p>

        <p style={{color: 'yellowgreen', textShadow: '0px 0px 0px yellow'}}>&copy; {new Date().getFullYear()} Calculator App</p>
      </footer>
      </div>
  </StrictMode>,
)
