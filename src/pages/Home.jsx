import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { RecommendedProjects } from '../components/RecommendedProjects'
import { AboutUs } from '../components/AboutUs'
import { Testimonial } from '../components/Testimonial'
import bannerImage from '../assets/Images/banner1.jpg'
import { TopBanner } from '../components/TopBanner'
import { Developers } from '../components/Developers/Developers'
import { FAQ } from '../components/FAQ/main'
export const Home = () => {
  return (
    <>
        <div className='bg-whitek-100'>
            <div
              className="relative bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10">
                <Header />
                <Banner />
              </div>
            </div>
            <div className=' mx-20 md:mx-36 py-8 flex-col space-y-8'>
              <RecommendedProjects/>
              <AboutUs/>
              <Testimonial/>
              <Developers/>
              <FAQ/>
            </div>
            <Footer/>
        </div>
    </>
  )
}
