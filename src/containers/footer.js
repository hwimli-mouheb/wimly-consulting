import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import Scroll from '../components/Scroll'
import { Link } from 'react-router-dom'
import './footer.css';
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <div style={{width:'100%',height:'100%',position:'relative',overflow:'hidden'}}>
                <img  src='uploads/images/wimlyLogo.png' alt='#' style={{position:'absolute',height:'350px',maxWidth:'350px',top:'-80px',left:'-85px'}} />
               </div>
                
                   
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Menu</Footer.Title>
                    <Link to="/employee" className='footer-link' >Find a job</Link>
                    <Link to="/employer" className='footer-link'>Find Talent</Link>
                    <Link to="/imprint" className='footer-link'>Imprint</Link>
                </Footer.Column>
            
                <Footer.Column>
               
                <Footer.Title>Contact us</Footer.Title>
               
                    <Footer.Linke href="https://www.facebook.com/WIMLY-Consulting-116551187603607"><Icon className="fab fa-facebook-f" />Facebook</Footer.Linke>
                    <Footer.Linke href="https://www.instagram.com/wimly_consulting/"><Icon className="fab fa-instagram" />Instagram</Footer.Linke>
                    <Footer.Linke href="https://www.linkedin.com/company/77726866/admin/"><Icon className="fab fa-linkedin" />Linkedin</Footer.Linke>
                    <Footer.Linke href="https://twitter.com/HouimliSeddik"><Icon className="fab fa-twitter" />Twitter</Footer.Linke>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title> <Scroll/> </Footer.Title>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}