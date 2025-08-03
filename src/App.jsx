import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Home />} />
        <Route path='/top-rated' element={<Home />} />
        <Route path='/upcoming' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
