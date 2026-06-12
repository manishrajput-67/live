import React from 'react';
import manishsolanki from '../../assets/manishsolanki.png'; 
import TextChanger from '../../../TextChanger';


const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
          Manish Solanki
         <TextChanger/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight mt-4'>
        I am a passionate Full-Stack Developer with experience in building dynamic and responsive web applications using technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
        </p>
        <button  className='mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#665697]'>
          Contact me
        </button>
      </div>
      <div className='mb-10 md:mb-0 md:w-2/5 flex justify-center'>
      <img className='h-full w-auto rounded-full object-cover shadow-xl border-4 border-[#665697] transition-transform duration-300 hover:scale-105'
          src={manishsolanki} alt="Manish Solanki" />
      </div>
    </div>
  );
};

export default Home;
