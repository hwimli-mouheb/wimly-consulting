import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
function CardItem(props) {
  useEffect(()=>{
    Aos.init({duration: 2000,once:true})
      },[]);
  return (
    <>
      <li className='cards__item'>
        
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.children}</p>
          </div>
        </Link>
       
      </li>
      
    </>
  );
}

export default CardItem;