import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home'
import { About } from './pages/About/About'
import { Property } from './pages/Property/Property'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Property" element={<Property />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
