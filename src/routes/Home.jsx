import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import img1 from "../assets/glass.png"
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

const Home = () => {

  //   const { ref: Ref, inView: inView } = useInView({
  //   threshold: 0.2,
  //   triggerOnce: true
  // });

  const [text, setText] = useState(" ");
  const fullText = "Hi, I'm Eleke Michael";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])


  return (

    <RevealOnScroll>
      <div className='flex flex-col w-full h-[100vh] justify-center items-center '>
        <div className='flex gap-6 items-center px-8'>
          {/*left section*/}

          <div className='mt-10 text-center md:text-center ' >
            <h1 className="text-transparent bg-gradient-to-r from-yellow-500 via-black-500 to-white bg-clip-text text-5xl font-semibold md:text-7xl">{text}</h1>
            <p className='text-white md:text-lg  max-w-lg leading-relaxed mx-auto'>I'm a dedicated programmer with a strong passion for solving problems through clean, efficient code. I enjoy building applications that are not only functional but also optimized for performance and user experience. </p>
            <div className='flex justify-center gap-4'>
              <a href='#Services'>
                <button className='text-white cursor-pointer text-center px-4 py-2 mt-3 rounded-md border-1 border-white border-solid  bg-gradient-to-r from-yellow-500 via-yellow to-black transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  text-lg'>Project</button>
              </a>
              <a href='https://drive.google.com/file/d/1D4yULm9eNeJW55fZIYZYw4xjM8uqG12J/view?usp=sharing'><button className='text-white text-center px-4 mr-5 py-2 mt-3 rounded-md border-1 border-white border-solid cursor-pointer bg-gradient-to-r from-black via-yellow to-yellow-500 transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  text-lg'>Resume</button></a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>



  )
}

export default Home