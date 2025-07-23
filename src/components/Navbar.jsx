import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX, FiMenu } from 'react-icons/fi';
import logo from '../assets/rml.png'; // Adjust the path to your logo image


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMenu = () => {
        setClick(false);
    }


    return (
        <div className='w-full fixed top-0 p-4 md:p-4 bg-black backdrop-blur-lg  opacity-90 z-50'>
            <div className='flex justify-between  mx-auto px-4 items-center'>
                <div className='flex items-center gap-4'>
                    <a href="#"><img src={logo} alt='logo' className='w-10 h-10 rounded-full' /></a>
                    {/* <h1 className='text-2xl text-yellow-500 font-bold'>Eleks</h1> */}
                </div>
                <ul className='text-center text-white gap-8 hidden md:flex items-center'>
                    <li className='hover:text-yellow-500'><a href="#" onClick={closeMenu}>Home</a></li>
                    <li className='hover:text-yellow-500'><a href="#Biography" onClick={closeMenu}>Biography</a></li>
                    <li className='hover:text-yellow-500'><a href="#Services" onClick={closeMenu}>Service</a></li>
                    <li className='hover:text-yellow-500'><a href="#Testimonal" onClick={closeMenu}>Testimonial</a></li>
                </ul>
                <div className='hidden md:flex items-center'>
                    <Link to="/Message"><button className='text-white cursor-pointer text-center p-2 rounded-md ml-2  border border-white border-solid bg-gradient-to-r from-yellow-500 via-yellow to-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-lg'>Message</button></Link>
                </div>
                <div className='md:hidden text-3xl text-white cursor-pointer' onClick={handleClick}>
                    {click ? <FiX /> : <FiMenu />}
                </div>
            </div>
            {click && (
                    <ul className='flex flex-col items-center gap-8 pt-20 pb-8 px-4 text-2xl text-white bg-black opacity-90 transition duration-300 ease-in-out absolute top-16 left-0 w-full z-40 md:hidden'>
                    <li className='hover:text-yellow-500'><a href="#Home" onClick={closeMenu}>Home</a></li>
                    <li className='hover:text-yellow-500'><a href="#Biography" onClick={closeMenu}>Biography</a></li>
                    <li className='hover:text-yellow-500'><a href="#Services" onClick={closeMenu}>Services</a></li>
                    <li className='hover:text-yellow-500'><a href="#Testimonal" onClick={closeMenu}>Testimonial</a></li>
                    <Link to="/Message"><button className='text-white text-center p-2 rounded-md  border border-white border-solid ml-2 bg-gradient-to-r from-black via-yellow to-yellow-500 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black text-lg'>Message</button></Link>
                </ul>
            )}
        </div>
    )
}

export default Navbar