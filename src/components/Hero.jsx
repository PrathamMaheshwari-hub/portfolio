import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
   
     
const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden" >
      {/* Left side*/}
     <div className='z-40 xl:mb-0 mb-[20%]'>
        <motion.h1
          initial={{ opacity:0, y:80}}
          animate={{opacity:1 ,y:0}}
          transition={{
            type:"spring",
            stiffness:40,
            damping:25,
            deleay: 2.3,  
            duration:1.5,          
          }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
          PRATHAM <br/> MAHESHWARI
        </motion.h1>

        <motion.p
        initial={{ opacity:0, y:80}}
          animate={{opacity:1 ,y:0}}
          transition={{
            type:"spring",
            stiffness:40,
            damping:25,
            deleay: 2.8,  
            duration: 0.9,          
          }}
        className='text-xl md:text-1x1 lg:text-2xl text-purple-200 max-w-2xl'   >
          Web-Devloper building a carbon footprint tracking
         System, I design workflow-heavy, high-stakes systems—turning 
          complex constraints into clear, usable experiences that scale in
           real-world conditions.  
        </motion.p>
        </div> 

        {/* right section */}
 <Spline className='absolute   xl:right-[-18%] right-0 top-[-20%] lg:top-0 '
  scene="https://prod.spline.design/PiZqksGDlwHXvUMF/scene.splinecode" />




   
   </section>
  )
}
        
      
export default Hero