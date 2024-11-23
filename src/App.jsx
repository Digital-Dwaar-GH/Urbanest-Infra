import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { RecommendedProjects } from './components/RecommendedProjects'
function App() {
  return (
    <>
      <div className='bg-violet-100'>
        <Header/>
        <Banner/>
        <RecommendedProjects/>
        <Footer/>
      </div>
    </>
  )
}

export default App
