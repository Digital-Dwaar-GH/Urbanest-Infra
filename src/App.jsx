import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { RecommendedProjects } from './components/RecommendedProjects'
import { SearchBar } from './components/SearchBar'
import { AboutUs } from './components/AboutUs'
import { Testimonial } from './components/Testimonial'
function App() {
  return (
    <>
      <div className='bg-violet-100 relative'>
        <Header/>
        <Banner/>
        <SearchBar/>
        <RecommendedProjects/>
        <AboutUs/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  )
}

export default App
