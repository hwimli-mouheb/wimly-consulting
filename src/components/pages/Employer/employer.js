import React from 'react';
import { motion } from 'framer-motion';
import FormEmployer from '../../FormEmployer';
import Accordion from '../../Accordion';
import Step from '../../Step'
const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '0' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: "0",
    opacity:0,
    transition: { ease: 'easeInOut' }
  }
};
function employer() {
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
      <FormEmployer/>
      <Step label='Get your dream team in just a few clicks.' stepOne='Fill in the form.' stepTwo='Schedule a meeting to fully understand your requirements.' stepThree='Sign a non-binding pre-contract and let us do the work for you.' stepFour='Get in touch with the selected talents and let the adventure begin.'/>
      <Accordion type='employer'/>
  </motion.div>
     
   
  );
}

export default employer;