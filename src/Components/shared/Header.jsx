import React from 'react';
import Slider from '../extra/Slider';

const Header = () => {
  return (
    <div className='md:grid md:grid-cols-3 md:gap-8 justify-center items-center'>
      <div className='mt-9'>
        <h1 className='text-3xl'><span className='text-5xl font-bold'>Welcome</span> the food world of <span className='text-5xl font-bold text-red-700'>Bangladesh</span></h1>

        <p className='text-gray-600 mt-8'>Bangladeshi cuisine is a rich and diverse culinary tradition that has been shaped by its geography, history, and cultural influences. Located in South Asia, Bangladesh shares borders with India and Myanmar, and has a long coastline along the Bay of Bengal. This has resulted in a cuisine that features a wide variety of flavors, spices, and ingredients, including rice, fish, meat, vegetables, and lentils.</p>

      </div>
      <div className='col-span-2'>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Header;