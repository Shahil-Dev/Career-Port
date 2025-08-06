import React from 'react';
import SliderSwiper from '../Components/SliderSwiper'; // Adjust this import based on your project
import TabCategories from '../Components/TabCategories';
//  structure

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <SliderSwiper></SliderSwiper>
            </div>
            <br /><br /><br />
            <div className='mt-2'>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                     <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Browse Jobs By Categories
        </h1>
        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Three categories available for the time being: Web Development, Graphics Design, and Digital Marketing. Browse them by clicking on the tabs below.
        </p>
                </div>


            </div>
      <div>
        <TabCategories></TabCategories>
      </div>




        </div>
    );
};

export default Home;