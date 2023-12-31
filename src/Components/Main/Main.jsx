// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
  return (
    <div className='rehn-regular text-primary '>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;