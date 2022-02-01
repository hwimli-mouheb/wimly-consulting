import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


export const Button = ({
  children,
  
}) => {
  
  return (
    <Link to='/employer' className='x'>
      <button className='btnn'>
        {children}
      </button>
    </Link>
  );
};