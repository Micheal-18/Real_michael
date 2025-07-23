import React from 'react'
import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion'


const Message = () => {

  const [loading, setLoading] = useState(false)

  const [statusMessage, setStatusMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setStatusMessage('');

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      setStatusMessage('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false)
    })
      .catch(() => {
        setStatusMessage('❌ Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <section className='min-h-screen flex items-center justify-center py-20'>

      <RevealOnScroll>
        <div className='px-4 w-100 md:w-150'>
          <h2 className='text-3xl text-center font-bold mb-20 text-transparent bg-gradient-to-r from-yellow-500 via-black-500 to-white bg-clip-text transition duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 via-black-500 to-white font-bold'>
            Send A Message
          </h2>
          <form  className='space-y-6' onSubmit={handleSubmit}>
            <div data-aos="fade-up" className='relative'>
              <input type='text' id='name' name='name' required value={formData.name} className='w-full bg-white/5 border rounded border-yellow/10 px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5' placeholder='Name...'
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div data-aos="fade-up" className='relative'>
              <input type='email' id='email' name='email' required value={formData.email} className='w-full bg-white/5 border rounded border-yellow/10 px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5' placeholder='example@gmail.com'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div data-aos="fade-up" className='relative'>
              <textarea id='message' name='message' required value={formData.message} rows={6} className='w-full bg-white/5 border rounded border-yellow/10 px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5' placeholder='Your Message... '
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button data-aos="fade-up" data-aos-offset='0' type="submit" disabled={loading} className={`w-full py-3 px-4 rounded bg-gradient-to-r border  border-white from-yellow-500 via-yellow text-black ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 cursor-pointer transition duration-300 ease-in-out hover:shadow-[0 2px 8px rgba(255, 255, 59, 0.1)]'}`}>
              {loading ? 'Sending... ' : 'Send Message'}</button>
          </form>

          {statusMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-4 text-center text-white'
            >
              {statusMessage}
            </motion.p>
          )}
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Message