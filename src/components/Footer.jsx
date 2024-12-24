import React from 'react';

const Footer = () => {
  return (
    <div className='bg-yellow-900 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
      <div className="logo font-bold text-white text-2xl">
        <span className='text-green-700'>&lt;</span>
        <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
      </div>
      <div className='flex justify-center items-center'>
        This is end
        <img className='w-7 mx-2' src="icons/heartlogo.png" alt="heart logo" />
        Code by me
      </div>
    </div>
  );
};

export default Footer;
