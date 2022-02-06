import React,{useEffect}from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Aos from "aos";
import "aos/dist/aos.css";
function Cards() {
  useEffect(()=>{
Aos.init({duration: 1000})
  },[]);
  return (
    <div className='cards'>
      <h1>Why us ?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
          <div data-aos="flip-right"  className='dummy'>
            <CardItem label='Strong knowledge of the African market:'>
              <ul>
                <li className='li'>We search for the best engineers in each country.</li>
             <li className='li'>We know how to match the best talent for your job. </li>
              <li className='li'>We meet all the needs of our workers to help them perform at their best: laptops, access to high-speed internet, and access to coworking space.</li>
              </ul>
            </CardItem>
            </div>
            <div data-aos="flip-left" className='dummy'>
            <CardItem label='A strict hiring process tailored to each client:'>
            <ul>
              <li className='li'>We offer each client a tailored search that depends on the language and skills required.
</li>
             <li className='li'>We offer competitive salaries to attract the best engineers in each country.</li>
              <li className='li'>We follow a strict, multi-step hiring process designed to find you the best match for your job.</li>
            </ul>
            </CardItem>
            </div>
          </ul>
          <ul className='cards__items'>
          <div data-aos="flip-right" className='dummy'>
            <CardItem label='Long-term vision with our clients and engineers:'>
            <ul>
            <li className='li'>We provide a single point of contact for each client and each engineer to deliver the best services.</li>
            <li className='li'>We provide our engineers with paid language courses and development certificates.
</li>
            <li className='li'>We incentivize our engineers to deliver their best for you with a monthly bonus for our hard-working engineers depending on the satisfaction percentage of the client.</li>
            </ul></CardItem>
            </div>
            <div data-aos="flip-left" className='dummy'>
            <CardItem label='Competitive fees and high-caliber engineers:'>
            <ul>
              <li className='li'>We match you with the perfect candidate for free.</li>
              <li className='li'>We offer a one-month trial for 50 percent of the contract value.</li>
             <li className='li'>We provide a large and highly skilled talent pool.</li>
              </ul>
              </CardItem>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;