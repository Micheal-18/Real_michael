import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/rml.png'; // Adjust the path to your logo image


const SimpleNavbar = () => {
    return (
        <div className='fixed flex mx-auto w-full justify-between items-center bg-black p-4 opacity-90 z-50'>
                <Link to="/"><img src={logo} alt='logo' className='w-10 h-10 rounded-full' /></Link>

                <Link to="/"> <button className='text-white text-center p-1 rounded-md  border border-white border-solid bg-gradient-to-r from-black via-yellow to-yellow-500 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black text-lg'>
                    ← Home
                </button></Link>
        </div>
)
}

export default SimpleNavbar