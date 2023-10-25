import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
