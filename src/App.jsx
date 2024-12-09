import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
