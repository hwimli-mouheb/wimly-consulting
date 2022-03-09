import React from 'react';
import { motion } from 'framer-motion';

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
function imprint() {
  return (
    <motion.div className="base container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      <h1>Wimly Consulting</h1>
      <p style={{height:'508px'}}> <h5>Wimly Consulting SARL </h5> represented by Najiba Raddadi Houimli
<br></br>Address: 1 Rue Amazone, Jardin Menzah 2, Ariana, Tunisie.
<br></br>Tax registration number: 1752523/N
<br></br>Email: houimli@spacetec.partners
<br></br>Phone number: +49 176 45689565
<br></br><a style={{color:'#09371f'}} href="https://calendly.com/houimli/wimly-consulting">Schedule a meeting</a> 
</p>

    
    </motion.div>
  );
}

export default imprint;