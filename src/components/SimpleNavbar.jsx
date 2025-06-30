import React from 'react'
import { Link } from 'react-router-dom'

const simpleNavbar = () => {
    return (
        <div className='fixed flex mx-auto w-full justify-between items-center bg-black opacity-90 z-50'>
                <h2 className='font-bold text-yellow-500 hover:text-white text-2xl'>Eleks</h2>

                <Link to="/"> <button className='text-white text-center p-2 rounded-md  border border-white border-solid ml-2 bg-gradient-to-r from-black via-yellow to-yellow-500 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black text-lg'>
                    ← Home
                </button></Link>
        </div>
)
}

export default simpleNavbar