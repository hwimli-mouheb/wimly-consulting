import React, { useState } from 'react';
import  './App.css'

import Navbar from './components/Navbar';
import { Route, Switch, useLocation } from "react-router-dom";

import { FooterContainer } from './containers/footer'
import './App.css'
import Home from './components/pages/HomePage/home';
import Employee from './components/pages/Employee/employee';
import Employer from './components/pages/Employer/employer';
import Imprint from './components/pages/Imprint/imprint';
import { AnimatePresence } from 'framer-motion';



    
    const item={
        id: 1,
        subtitle: 'We provide you with the right person that fits your demand',
        title: 'description'
    }
function App() {
  const [selectedId, setSelectedId] = useState(null);
  const location = useLocation();
  return (
    <>
   
       <Navbar/>
       <AnimatePresence exitBeforeEnter>
       <Switch location={location} key={location.key}>
       <Route path='/' exact>
         <Home/>
       </Route>
        <Route path='/employee' >
          <Employee/>
        </Route>
        <Route path='/employer' >
          <Employer/>
        </Route>
        <Route path='/imprint' >
          <Imprint/>
        </Route>
       </Switch>
       </AnimatePresence>
  
   
  




   
  
  
       <FooterContainer />


      </>);
}






   

   


export default App;
