import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function HeroSection({
  
  headline,
  description,
  
  img,
  alt,
 
}) {
  return (
    <>
    <div className='containerrr'>
    <div className='home__hero-text-wrapper'>
<h1 className='heading' style={{ fontFamily: 'Regular 400 italic'}}>
                  {headline}
                </h1>
                <p
                  className='home__hero-subtitle'>
                  {description}
                </p>
                <div style={{height:'30px'}}>
                <Button>
          Hire a developper
        </Button>
        </div>
        <p style={{paddingLeft:'31px'}}>Are you an IT engineer? <Link to='/employee' className='apply'>Apply here</Link></p>
       
       </div>
     <div className='container-home'>
  
    
     <img src={img} alt={alt} className='home__hero-img' />
  
    
     </div>
     </div>
    </>
  );
}

export default HeroSection;