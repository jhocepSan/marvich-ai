import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <main  className="min-h-screen z-50  ">
            <Outlet/>
            </main>
            <div className='z-10'>
            <Footer/>
            </div>
        </div>
    );
};

export default Root;