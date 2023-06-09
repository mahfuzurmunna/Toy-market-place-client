// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';

const Blogs = () => {
  const location = useLocation();

  const path = location.pathname;
  return (
    <div className="my-container">
      <div className='bg-bg text-center p-24'>
        <small>{path}</small>
        <h2 className='text-4xl rehn-bold '>
         Questions & Answers
        </h2>
      </div>
      
    </div>
  );
};

export default Blogs;