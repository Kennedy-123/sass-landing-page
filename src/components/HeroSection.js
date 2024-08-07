import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section text-center mt-32 flex  flex-col">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.5]">
        Launch Your Sass
        <br />
      <span className='bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>In Minutes Not Days</span>
      </h1>
      <h2 className='mt-5 text-gray-600'>Nexx is an open-source tool for developers who want to launch their ideas faster.</h2>
    </section>
  );
}

export default HeroSection;
