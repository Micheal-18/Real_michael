import React from 'react'
import img3 from "../assets/port.png"
import img4 from "../assets/food.png"
import img5 from "../assets/ecom.png"
import img6 from  "../assets/eshop.png"
// import { useInView } from 'react-intersection-observer'
import { FaArrowRight } from 'react-icons/fa'
import RevealOnScroll from '../components/RevealOnScroll';


const Services = () => {

  // const { ref: Ref, inView: InView } = useInView({
  //   threshold: 0,
  //   triggerOnce: true
  // });

  return (
    <section id='Services' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4 '>
        <h2 className='text-3xl text-center font-bold mb-20 text-transparent bg-gradient-to-r from-yellow-500 via-black-500 to-white bg-clip-text transition duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 via-black-500 to-white font-bold'>Services</h2>
        <RevealOnScroll>
          <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 rgba(255, 255, 59, 0.1)] transition">
              <h3 className='text-xl font-bold mb-2'>
                Portfolio Site
              </h3>
              <img className=' flex mx-auto justify-center items-center rounded-sm w-[80%] mb-6' src={img3} alt='portfolio' />
              <div className='flex flex-wrap gap-2 mb-4'>
                {["HTML5", "CSS", "JavaScript"].map((tech, key) => (
                  <span key={key} className='bg-yellow-500 text-white py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0 2px 8px rgba(255, 255, 59, 0.1)] transition-all'>{tech}</span>
                ))}
              </div>
              <div className='flex justify-between items-center my-2'>
                <a href='https://djsparow.netlify.app/' className='text-yellow-500 hover:text-yellow-300 transition-colors flex items-center gap-2'>View Project <FaArrowRight />  </a>
              </div>
            </div>

            <div  className='p-6 rounded-xl border border-white/10 hover:-translate-y-1  hover:border-yellow-500/30 rgba(255, 255, 59, 0.1)] transition'>
              <h3 className='text-xl font-bold mb-2'>
                Resturant Site
              </h3>
              <img className=' flex mx-auto justify-center items-center rounded-sm w-[80%] mb-6' src={img4} alt='portfolio' />
              <div className='flex flex-wrap gap-2 mb-4'>
                {["HTML5", "CSS", "JavaScript"].map((tech, key) => (
                  <span key={key} className='bg-yellow-500 text-white py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0 2px 8px rgba(255, 255, 59, 0.1)] transition-all'>{tech}</span>
                ))}
              </div>
              <div className='flex justify-between items-center my-2'>
                <a href='https://crunchy-taste001.netlify.app/' className='text-yellow-500 hover:text-yellow-300 transition-colors flex items-center gap-2'>View Project <FaArrowRight />  </a>
              </div>
            </div>

            <div  className='p-6 rounded-xl border border-white/10 hover:-translate-y-1  hover:border-yellow-500/30 rgba(255, 255, 59, 0.1)] transition'>
              <h3 className='text-xl font-bold mb-2'>
                Landing Page
              </h3>
              <img className=' flex mx-auto rounded-sm justify-center items-center w-[80%] mb-6' src={img5} alt='portfolio' />
              <div className='flex flex-wrap gap-2 mb-4' n>
                {["Reactjs", "TailwindCss"].map((tech, key) => (
                  <span key={key} className='bg-yellow-500 text-white py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0 2px 8px rgba(255, 255, 59, 0.1)] transition-all'>{tech}</span>
                ))}
              </div>
              <div className='flex justify-between items-center my-2'>
                <a href='https://micheal-18.github.io/Nexcent/' className='text-yellow-500 hover:text-yellow-300 transition-colors flex items-center gap-2'>View Project <FaArrowRight />  </a>
              </div>
            </div>
            <div  className='p-6 rounded-xl border border-white/10 hover:-translate-y-1  hover:border-yellow-500/30 rgba(255, 255, 59, 0.1)] transition'>
              <h3 className='text-xl font-bold mb-2'>
                E-Commerce Site
              </h3>
              <img className=' flex mx-auto rounded-sm justify-center items-center w-[80%] mb-6' src={img6} alt='portfolio' />
              <div className='flex flex-wrap gap-2 mb-4' n>
                {["Reactjs","TailwindCss"].map((tech, key) => (
                  <span key={key} className='bg-yellow-500 text-white py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0 2px 8px rgba(255, 255, 59, 0.1)] transition-all'>{tech}</span>
                ))}
              </div>
              <div className='flex justify-between items-center my-2'>
                <a href='https://eshop-tau-five.vercel.app' className='text-yellow-500 hover:text-yellow-300 transition-colors flex items-center gap-2'>View Project <FaArrowRight />  </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Services
