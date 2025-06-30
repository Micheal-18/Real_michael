import React from 'react'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll';


const Testimonal = () => {

  const { ref: Ref, inView: InView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id='Testimonal' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl text-center font-bold mb-20 text-transparent bg-gradient-to-r from-yellow-500 via-black-500 to-white bg-clip-text transition duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 via-black-500 to-white font-bold'>Testimonal</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <RevealOnScroll>
            <div ref={Ref} className={`p-6 rounded-xl ${InView ? 'animation-left' : ''} border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition`}>
              <h3 className='text-xl font-bold mb-2'>Dj Sparow🦅</h3>
              <p className='text-white/80 mb-4'>"This is a fantastic service! I was able to get my portfolio site done on time and with great quality."</p>
              <span className='text-yellow-500'>⭐⭐⭐⭐⭐</span>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}

export default Testimonal