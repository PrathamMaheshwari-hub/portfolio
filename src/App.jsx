import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


import Header from "./components/Header"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
export default function App() {

  useEffect(() => {
    // Register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger when the page is fully loaded
       ScrollTrigger.refresh()

      //  Cleanup scroll triggers on component unmount
      return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) 
      }
  },[])
    


  return (
   <>
   <Header/>
   <Hero />
   <CustomCursor />
   <AboutSection />
   <ProjectsSection/>
    <ContactSection />
    <Footer />
    <ProgressBar />
   </>
  )
}