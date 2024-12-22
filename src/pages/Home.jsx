import React from 'react'
import { Banner } from '../components/Banner'
import { RecommendedProjects } from '../components/RecommendedProjects'
import { AboutUs } from '../components/AboutUs'
import { Testimonial } from '../components/Testimonial'
import { TopBanner } from '../components/TopBanner'
import { Developers } from '../components/Developers/Developers'
import { FAQ } from '../components/FAQ/main'
import { Layout } from '../components/Layout/Layout'
import { OurTeams } from '../components/OurTeams'
export const Home = () => {
  return (
    <>
        <Layout pageType="home">
            <Banner />
            <div className=' mx-20 md:mx-36 py-8 flex-col space-y-8'>
              <RecommendedProjects/>
              <AboutUs/>
              <Testimonial/>
              <Developers/>
              <OurTeams/>
              <FAQ/>
            </div>
        </Layout>
    </>
  )
}
