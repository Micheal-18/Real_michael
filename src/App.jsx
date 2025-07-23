import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Service from './routes/Services'
import Biography from './routes/Biography'
import Testimonal from './routes/Testimonal'
import Message from './routes/Message'
import LoadingScreen from './components/LoadingScreen'
import Navbar from "./components/Navbar"
import Footer from './routes/Footer'
import "./index.css";
import SimpleNavbar from './components/SimpleNavbar'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        easing: "ease",
        delay: 100,
        offset: 100,       
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <Home />
            <Biography />
            <Service />
            <Testimonal />
            <Footer />
          </>} />

          <Route path="/Message" element={
            <>
              <SimpleNavbar />
              <Message />
            </>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App
