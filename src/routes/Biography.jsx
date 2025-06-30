import React from 'react'
import { useInView } from 'react-intersection-observer'
import img2 from "../assets/dick.JPG"
import RevealOnScroll from '../components/RevealOnScroll';

const Biography = () => {

  const { ref: pRef, inView: pInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const { ref: skillRef, inView: skillInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const { ref: eduRef, inView: eduInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const { ref: workRef, inView: workInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
  ];

  return (
    <section id="Biography" className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-6xl text-center mx-auto px-4 '>
        <h2 className='text-3xl font-bold mb-20 text-transparent bg-gradient-to-r from-yellow-500 via-black-500 to-white bg-clip-text transition duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 via-black-500 to-white font-bold'>Biography</h2>
        <RevealOnScroll>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20'>
            <img className='h-[60vh] w-auto md:w-[400px] object-cover hover:-translate-y-1 rounded-lg border-2 border-yellow-500' src={img2} alt='pic' />

          <div className='text-white md:text-left text-left'>
            <p ref={pRef} className={`text-white ${pInView ? 'animation-left' : ''} md:text-lg text-base  leading-relaxed max-w-3xl mx-auto`}>
              I'm a passionate front-end developer with a love for crafting interactive, accessible, and visually appealing web experiences. With a keen eye for detail and a solid foundation in modern technologies like React, Tailwind CSS, and JavaScript, I focus on building responsive, performant, and user-friendly interfaces.

              Beyond coding, I enjoy learning new tools and design principles to keep delivering fresh, innovative solutions. I believe in continuous improvement, problem-solving, and building applications that don't just work — but feel great to use.
            </p>

            <div ref={skillRef} className={`rounded-xl p-6 ${skillInView ? 'animation-right' : ''}  hover:translate-y-1  transition-all`}>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech, key) => (
                  <span key={key} className='bg-yellow-500 text-white py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0 2px 8px rgba(255, 255, 59, 1)] transition'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 text-left md:grid-cols-2 gap-6 mt-8'>
          <div ref={eduRef} className={`p-6 rounded-xl border-yellow-500/10 ${eduInView ? 'animation-left' : ''}  border hover:-translate-y-1 transition-all `}>
            <h3 className='text-xl font-bold mb-4'>🎓 Education</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2 '>
              <li><strong>Undergraduate in Electrical Engineering</strong> University of Nigeria Nsukka (2021-2026) </li>
              <li>Relevant Coursework: Web Development </li>
            </ul>
          </div>
          <div ref={workRef} className={`p-6 rounded-xl border-yellow-500/10 ${workInView ? 'animation-right' : ''}  border hover:-translate-y-1 transition-all`}>
            <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
            <div className='space-y-4 text-gray-300'>
              <div>
                <h4 className='font-semibold'>FrontEnd Dev at codeSurge (2022-2024) </h4>
                <p>Taught people HTML, CSS and JavaScript</p>
              </div>

              <div>
                <h4 className='font-semibold'>Intern at NanocodeProgramming.ltd </h4>
                <p>Assisting in building front-end components and integrating REST APIs</p>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
        
      </div>
    </section>
  )
}

export default Biography