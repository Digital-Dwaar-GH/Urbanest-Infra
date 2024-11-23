import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
function App() {
  return (
    <>
      <div className='bg-violet-100'>
        <Header/>
        <Banner/>
        <Footer/>
      </div>
    </>
  )
}

export default App
