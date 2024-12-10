import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { RecommendedProjects } from '../components/RecommendedProjects'
import { SearchBar } from '../components/SearchBar'
import { AboutUs } from '../components/AboutUs'
import { Testimonial } from '../components/Testimonial'
import bannerImage from '../assets/Images/banner1.jpg'
export const Home = () => {
  return (
    <>
        <div className='bg-violet-100 relative'>
            <div className=' bg-cover bg-center' style={{ backgroundImage: `url(${bannerImage})` }}>
              <Header/>
              <Banner/>
            </div>
            <SearchBar/>
            <RecommendedProjects/>
            <AboutUs/>
            <Testimonial/>
            <Footer/>
        </div>
    </>
  )
}
