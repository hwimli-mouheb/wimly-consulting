import React, { useState } from 'react';
import { data } from './AccordionData';

import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
import './Accordion.css';
const Accordion = (props) => {
  const dataSpec=data[props.type];
  const [selected,setSelected]=useState(null);

  const toggle =(i)=>{
    if(selected===i){
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <>
    <div className={(selected ? 'wrapperSelect' : 'wrapper' )}>
      <h1 className='FAQ'>FAQ</h1>
      <div className={(selected ? 'accordionSelect' : 'accordion' )}>
        
        {dataSpec.map((item,i)=>(
         <div className='item' key={item.key}>
           <div className='title' onClick={()=>toggle(i)}>
            <h2 className='titleContent'>{item.question}</h2>
            <span>{selected===i ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</span>
           </div>
           <div className={selected===i ? 'content show' : 'content '}>
             <p className='contenttext'>{item.answer}</p>
           </div>
         </div>
        ))}
        </div>
    </div>
    </>
  );
};

export default Accordion;