import './App.css'
import { Menu } from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Program } from './components/Program/Program'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'

function App () {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/enlightenment-area' element={<Program />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
