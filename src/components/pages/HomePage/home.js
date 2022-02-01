import React,{ Fragment } from 'react';
import { motion } from 'framer-motion';

import HeroSection from '../../HeroSection';
import { homeObjOne } from './data';
import Cards from '../../Cards';
import Partners from '../../Partners';
import Accordion from '../../Accordion';
const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay: 0.5, duration: 1.2 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };
  
function home() {
    
   
  return (
    <>
    <motion.div className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroSection {...homeObjOne}/>
      
     
      
      <Cards/>
    
<Partners/>
 <Accordion type='employer'/>
</motion.div>
      </>
  );
}

export default home;