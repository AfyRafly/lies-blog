import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Test2Page = () => {
  return (
    <div className='bg-white container mx-auto h-screen justify-center flex'>
      <div className='flex flex-row items-center justify-center gap-6'>
        <div className='w-[36rem]'>
          <h1 className='text-5xl font-extrabold mb-2'>Static is fast.</h1>
          <h1 className='text-5xl text-purple-500 font-extrabold mb-8'>
            Static now scales.
          </h1>
          <p className='text-lg mb-8'>
            Generate it statically. Generate it dynamically. Or, somewhere in
            between. However you build your website –{' '}
            <strong>build it fast, secure, and scalable with Gatsby 4.</strong>
          </p>
          <div className='flex flex-row gap-8 text-xl'>
            <button className='group text-white bg-purple-500 hover:bg-purple-900 p-4 rounded-lg flex flex-row items-center gap-2'>
              <p> Sign up for free</p>
              <div className='flex items-center'>
                <BsArrowRight className='group-hover:animate-ping absolute inline-flex opacity-0 group-hover:opacity-75' />
                <BsArrowRight className='relative inline-flex' />
              </div>
            </button>
            <button className='text-purple-500 flex flex-row items-center gap-2'>
              <p>Talk to an expert</p>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div>
          <img src='./images/tes.jpg' alt='gambar si tes' />
        </div>
      </div>
    </div>
  );
};

export default Test2Page;
