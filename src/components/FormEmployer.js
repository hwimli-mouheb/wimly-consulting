import React from 'react';
import FileUpload from './FileUpload';
import './FormEmployer.css'
function FormEmployer() {
  return (
  <>

<div className='tabb' >
        <div className='lefti' > 
        <img src='/uploads/images/form.svg' alt='#'/>
        <h2 style={{color:'#09371f'}}>Please fill in this form !</h2>
        <h4 style={{color:'#09371f'}}>And attach the job description file</h4>
        </div>
        <div className='righti' > 
        <div className='file' >
            <FileUpload from='employer' fileLabel='Select job description file' messageLabel='Brief job description' onSubmitMessage1="Thank you for contacting us" onSubmitMessage2="We will contact you as soon as possible"/>
            </div>
        </div>
    </div>
</>
);
};

export default FormEmployer;
