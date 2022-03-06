import React from 'react';
import  './App.css'

import Navbar from './components/Navbar';
import { Route, Switch, useLocation } from "react-router-dom";

import { FooterContainer } from './containers/footer'
import './App.css'
import Home from './components/pages/HomePage/home';
import Employee from './components/pages/Employee/Employee';
import Employer from './components/pages/Employer/Employer';
import Imprint from './components/pages/Imprint/imprint';
import { AnimatePresence } from 'framer-motion';



   
function App() {
  
  const location = useLocation();
  return (
    <>
       <div className='containerrr'>
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
</div>

      </>);
}






   

   


export default App;
