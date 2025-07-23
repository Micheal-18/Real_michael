import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/rml.png'; // Adjust the path to your logo image


const SimpleNavbar = () => {
    return (
        <div className='fixed flex mx-auto w-full justify-between items-center bg-black p-4 opacity-90 z-50'>
                <Link to="/"><img src={logo} alt='logo' className='w-10 h-10 rounded-full' /></Link>

                <Link className='text-3xl hover:scale-120' to="/"> 
                    ←
                </Link>
        </div>
)
}

export default SimpleNavbar