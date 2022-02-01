import React,{useEffect} from 'react';

import './Step.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Step(props) {
    useEffect(()=>{
        Aos.init({duration: 1000})
          },[]);
    return (
      <>

       <h1>{props.label}</h1>
       <div class="containerr">
          
           
           <div style={{ width:'100%', backgroundColor:'rgba(242,237,219,255)'}}>
  <div class="row-step-i">
    <div class="col">
    <img className='imageNumber' data-aos="fade-right" alt='#' src='/uploads/images/one.png'/>
        <h5 className='stepText' data-aos="fade-right">{props.stepOne}</h5>
   
    </div>
    <div class="col-img">
    <img className='image' data-aos="fade-left" src='/uploads/images/formulaire.svg' alt='#'/>
    </div>
  </div>



  <div class="row-step-p">
    <div class="col">
    <img className='imageNumber' data-aos="fade-right" alt='#' src='/uploads/images/two.png'/>
   <h5 className='stepText' data-aos="fade-right"> {props.stepTwo} </h5>
    </div>
    <div class="col-img">
    <img className='image' data-aos="fade-left" src='/uploads/images/interview.svg' alt='#'/>
    </div>
  </div>



  <div class="row-step-i">
    <div class="col" data-aos="fade-right">
    <img className='imageNumber' alt='#' src='/uploads/images/three.png'/>
    <h5 className='stepText' > {props.stepThree}</h5>
    </div>
    <div class="col-img">
    <img className='image' data-aos="fade-left" src='/uploads/images/contract.svg' alt='#'/>
    </div>
  </div>




  <div class="row-step-p">
    <div class="col">
    <img className='imageNumber' data-aos="fade-right" alt='#' src='/uploads/images/four.png'/>
      <h5 className='stepText' data-aos="fade-right"> {props.stepFour}</h5>
    </div>
    <div class="col-img">
    <img className='image' data-aos="fade-left" src='/uploads/images/start.svg' alt='#'/>
    </div>
  </div>
  
  </div>
  
</div>
      </>
    );
  }

export default Step;
