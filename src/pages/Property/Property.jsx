import React, { useEffect } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { FAQ } from '../../components/FAQ/main';// import the projects array
import { projects } from '../../data/projects';
import propertyImage from '../../assets/Images/property.jpg'



export const Property = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-10">
        <div className='mx-20 md:mx-36 flex-col space-y-16'>
            <div 
                className="relative rounded-2xl h-96 sm:h-72 md:h-96 lg:h-[500px] md:my-20"
                style={{ backgroundImage: `url(${propertyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-950 to-transparent flex justify-center items-center  rounded-2xl">
                    <h1 className="text-2xl md:text-4xl font-semibold max-w-2xl text-center text-white"> Discover Your Dream Property with Our Exceptional Projects</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <FAQ />
      </div>
    </Layout>
  );
};
