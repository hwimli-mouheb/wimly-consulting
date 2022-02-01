import React,{ Fragment, useState,useEffect } from 'react';
import axios from 'axios';
import Message from './Message';
import Progress from './Progress';
import './style.css';
function FileUpload(props) {


const [message, setMessage] = useState('');
const [uploadPercentage, setUploadPercentage] = useState(0);
const [file , setFile]=useState("");
const [filename , setFilename]=useState("");
const [firstname , setfirstname]=useState("");
const [lastname , setlastname]=useState("");
const [company , setcompany]=useState("");
const [position , setposition]=useState("");
const [messageField , setmessageField]=useState("");
const [phone , setphone]=useState("");
const [email , setemail]=useState("");
const[isSubmitted, setSubmitted]=useState(false);
useEffect(() => {
  
}, [isSubmitted]);
const onFileChange= e=>{
setFile(e.target.files[0]);
setFilename(e.target.files[0].name);
}

const onFirstnameChange=e=>{
setfirstname(e.target.value);
}
const onLastnameChange=e=>{
  setlastname(e.target.value);
  }
const onMessageChange=e=>{
    setmessageField(e.target.value);
    }
const onPhoneChange=e=>{
      setphone(e.target.value);
      }
const onEmailChange=e=>{
        setemail(e.target.value);
        }
const onCompanyChange=e=>{
  setcompany(e.target.value);
}
const onPositionChange=e=>{
  setposition(e.target.value);
}
const onSubmit = async e =>{
e.preventDefault();

console.log(filename);
  const formData = new FormData();
  formData.append('firstname',firstname);
  formData.append('lastname',lastname);
  formData.append('company',company);
  formData.append('position',position);
  formData.append('email',email);
  formData.append('phone',phone);
  formData.append('messageField',messageField);
  formData.append('from',props.from);
  
  console.log(firstname);
  formData.append('file',file)
  try{
const res= await axios.post('/upload',formData , {
    headers : {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: ProgressEvent=>{
     setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded*100)/
     ProgressEvent.total)))
    
    setTimeout(() => {
      setUploadPercentage(0)
      setSubmitted(true);
    },1000);
    
  }
}).then((response)=>{
console.log('response');
console.log(res);
});
  }catch(err){
  if(err.response.status === 500){
    setMessage('there was a problem with the server');
  }else{
    setMessage(err.response.data.msg);
    
  }
  }

};

if(isSubmitted===true){
  return(<div className='submitted'>
    <h4 style={{textAlign:'center',color:'#09371f',padding:'70px 0'}}>{props.onSubmitMessage1}</h4>
    <p style={{textAlign:'center',color:'#09371f',padding:'70px 0'}}>{props.onSubmitMessage2} </p>
  </div>);
}else{ 
  return (
    
  <Fragment>
   
   {message ? <Message msg={message} /> : null}


<form onSubmit={onSubmit}>
    <div className="row">
    <div className="col">
    <small className="text-muted">First name</small>
      <input onChange={onFirstnameChange} type="text" id='firstName' name='firstName' className="form-control" placeholder="First name" required/>
      
    </div>
    <div className="col">
    <small className="text-muted">Last name</small>
      <input onChange={onLastnameChange} type="text" id='lastName' name='lastName' className="form-control" placeholder="Last name" required/>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <small className="text-muted">Company</small>
      <input onChange={onCompanyChange} type="text" id='company' name='company' className="form-control" placeholder="Company" />
      
    </div>
    <div className="col">
    <small className="text-muted">Position</small>
      <input onChange={onPositionChange} type="text" id='position' name='position' className="form-control" placeholder="Position" />
    </div>
  </div>

  <div className="row">
    <div className="col">
    <small className="text-muted">Email</small>
      <input onChange={onEmailChange} type="Email" id='email' name='email' className="form-control" placeholder="Email" required/>
      
    </div>
    <div className="col">
    <small className="text-muted">Phone</small>
      <input onChange={onPhoneChange} type="phone" id='phone' name='phone' className="form-control" placeholder="Phone" required/>
    </div>
  </div>
  <br/>
  <div className="row">
    
  <small className="text-muted">{props.messageLabel}</small>
  <textarea onChange={onMessageChange} id='message' name='message' rows="5" cols="1" style={{borderRadius:'5px',border:'0.1rem solid rgb(195, 193, 193)',resize: 'none',width:'96%',marginLeft:'auto',marginRight:'auto'}}></textarea>
    </div>
  


  <br/>
  
<div className="row">
    <div className="col-5">
    <small className="text-muted">{props.fileLabel}</small>
  <input 
  type="file"
  className="custom-file-input"
  id="customFile"
  onChange={onFileChange}
  required
    />
     
</div>
<div className="col" ></div>

  </div> 
    
    <br/>
    <br/>
 
    <Progress percentage={uploadPercentage}></Progress>
    <br/><br/>

<input 
type="submit"
className='btn btn-primary btn-block '
value="Submit"
style={{backgroundColor:'#09371f',borderColor:'#09371f',float:'right'}}
  />

  
</form>





  </Fragment>);
}}

export default FileUpload;
