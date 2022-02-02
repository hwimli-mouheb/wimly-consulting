import React,{useEffect} from 'react';
import './Partners.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Partners() {
  useEffect(()=>{
    Aos.init({duration: 1000})
      },[]);
  return (
  <>
  <div style={{height : '450px', backgroundColor :'#fbfbf3',padding :'50px'}}>
     
          <h1>Our partners</h1>
<div className="row" >
  <div data-aos="fade-down" className="column1" >
      <div className='partner_logo'>
      <a  href='https://www.spacetec.partners/'>
      <img  src='/uploads/images/space.png' alt='#'/>
      </a>
      </div>
  </div>

  <div className="column2" data-aos="fade-up" style={{marginTop:'10px',display:'inline-block'}}><p className='partner_text'>They are a consultancy firm that combines years of experience with in-depth expertise in the space industry.</p></div>
</div>

</div>
  </>
  );
}

export default Partners;
