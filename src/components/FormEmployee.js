import React from 'react';
import FileUpload from './FileUpload';
import './FormEmployee.css'
function FormEmployee() {
  return (
  <>

<div className='tabb' >
        <div className='lefti' > 
        <img src='/uploads/images/form.svg' alt='#'/>
        <h2 style={{color:'#09371f'}}>Please fill in this form !</h2>
        <h4 style={{color:'#09371f'}}>And attach your personal CV</h4>
        </div>
        <div className='righti' > 
        <div className='file' >
            <FileUpload fileLabel='Select your CV' messageLabel='Message' from="employee" onSubmitMessage1="Thank you for contacting us" onSubmitMessage2="We will contact you as soon as possible"/>
            </div>
        </div>
    </div>
</>
);
};

export default FormEmployee;
