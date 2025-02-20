import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
      <div className="min-h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;