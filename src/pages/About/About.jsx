import React, { useEffect } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { FAQ } from '../../components/FAQ/main';
import aboutImage from '../../assets/Images/1.jpg'; // Replace with the actual image you want to use for the About section
import missionImage from '../../assets/Images/2.jpg'; // Replace with mission image
import visionImage from '../../assets/Images/3.jpg'; // Replace with vision image
import ceoImage from '../../assets/Images/4.jpg'; // Replace with CEO's image

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-10">
        {/* Hero Section */}
        <div className='mx-20 md:mx-36 flex-col space-y-16'>
          <div 
            className="relative rounded-2xl h-96 sm:h-72 md:h-96 lg:h-[500px] my-20"
            style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-950 to-transparent flex flex-col space-y-4 justify-center items-center rounded-2xl">
              <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl text-center text-white">About Us</h1>
              <h2 className="text-md md:text-2xl font-semibold max-w-2xl text-center text-white">Learn More About Our Mission and Our Vision</h2>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0  md:h-96  rounded-2xl overflow-hidden shadow-lg ">
            <div className="flex-1  h-full">
              <img src={missionImage} alt="Mission" className="w-full h-full object-cover " />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4 p-16 ">
              <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-md md:text-lg text-gray-700">
                Our mission is to provide exceptional real estate services that help our clients find properties that align with their unique needs and desires.
                We aim to simplify the process and make real estate transactions more efficient and accessible for everyone.
              </p>
              <button className="px-6 py-3 text-white rounded-lg bg-whitek-600 hover:bg-whitek-900">
                Get Started
              </button>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:h-96  rounded-2xl overflow-hidden shadow-lg">
            <div className="flex-1 text-center md:text-left space-y-4 p-16">
              <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Our Vision</h3>
              <p className="text-md md:text-lg text-gray-700">
                We envision a future where buying and selling property is a seamless, transparent, and accessible process for everyone. 
                Our goal is to lead the way in innovative solutions for real estate, creating a more streamlined experience for our clients.
              </p>
              <button className="px-6 py-3  text-white rounded-lg bg-whitek-600 hover:bg-whitek-900">
                Get Started
              </button>
            </div>
            <div className="flex-1 h-full">
              <img src={visionImage} alt="Vision" className="w-full h-full object-cover " />
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="text-center space-y-6 p-4 md:p-16 rounded-2xl shadow-lg bg-gray-200">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-md md:text-lg text-gray-700">
              We are a team of passionate individuals committed to connecting you with the best real estate opportunities. 
              Whether you're looking for your first home, an investment property, or simply exploring options, we're here to guide you every step of the way.
            </p>
            <p className="text-lg text-gray-700">
              Our vision is to make property buying and selling easier, faster, and more transparent. We believe everyone deserves 
              to find their perfect home or investment property, and we strive to provide a seamless experience for all our clients.
            </p>
          </div>
          {/* CEO Section */}
            <div className="flex flex-col md:flex-row items-center space-y-8 md:h-96 md:space-y-0  rounded-2xl overflow-hidden shadow-lg">
                <div className="flex-1 h-full">
                    <img src={ceoImage} alt="CEO" className="w-full h-full object-cover " />
                </div>
                <div className="flex-1 text-center md:text-left p-8 md:p-16">
                    <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Meet Our CEO</h3>
                    <p className="text-md md:text-lg text-gray-700">
                    Our CEO, [CEO Name], is a visionary leader with over [X] years of experience in the real estate industry. Under their leadership, 
                    the company has grown to be a trusted name in the industry, consistently delivering exceptional results for our clients.
                    </p>
                </div>
            </div>
        </div>
        <FAQ />
      </div>
    </Layout>
  );
};
