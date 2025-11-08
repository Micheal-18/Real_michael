import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import walkGif from "../assets/dog.gif"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='flex items-center justify-center py-10 bg-gradient-to-r from-black to-gray-900 opacity-90'>
            <div className='max-w-5xl mx-auto px-4'>
                <div data-aos="fade-out" className='flex flex-col jusitfy-center items-center text-center text-white/80'>
                    <p>© 2025 Eleke Imammachukwu Michael. All rights reserved.</p>
                    <p>Follow me on social media!</p>
                    <div className='flex gap-4 text-yellow-500 hover:text-yellow-900 mt-4'>
                        <a className=" hover:scale-105 transition duration-500" href='https://www.linkedin.com/in/eleke-michael-bb53a3237/'><FaLinkedin/></a>
                        <a className=" hover:scale-105 transition duration-500"  href='https://x.com/michael_eleke'><FaTwitter/></a>
                        <a className="hover:scale-105 transition duration-500"  href='https://github.com/Micheal-18'><FaGithub/></a>
                    </div>
                </div>
                <footer className='mt-10'>
                    <img src={walkGif} alt='walking gif' className='w-20 h-20 animation-walk' />
                </footer>
            </div>
        </section>
    )
}

export default Footer
