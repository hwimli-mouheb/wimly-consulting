import React from 'react';
import { motion } from 'framer-motion';

import FormEmployee from '../../FormEmployee';

import  Accordion  from '../../Accordion';
import Step from '../../Step'
const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '0' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', delay: 0.7 }
    },
    exit: {
      x: "0",
      opacity:0,
      transition: { ease: 'easeInOut' }
    }
  };
function employee() {
  return (
    <>
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
     
      <div>
        <FormEmployee/>
      <Step label='Get your dream job in just a few clicks.' stepOne='Fill in the form' stepTwo='Pass the interview process' stepThree='If accepted, sign a non-binding pre-contract and let us do the work for you' stepFour='Get in touch with the client and let the adventure start'/>
       <Accordion type='employee'/>
      </div>
  </motion.div>
    
   </>
  );
}

export default employee;