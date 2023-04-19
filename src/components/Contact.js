import React from 'react'
import '../style/Contact.css'
import location from '../resources/location-sign-svgrepo-com.svg';
import email from '../resources/email-8-svgrepo-com.svg';
import call from '../resources/call-svgrepo-com.svg';

const Contact = () => {
  return (
    <div>
        <div class="bar1">
            <div class="venue">
                <img src={location} alt="" /><br />            
                <a href="">VENUE</a>
                <p>Mahindra University<br />Survey No. 62/1A, Bahadurpally,<br />Jeedimetla Hyderabad<br />500043, Telangana, INDIA.</p>
            </div>
            <div class="contact">
                <img src={call} alt="" /><br />
                <a href="">CONTACT</a>
                <p>+91-6302 973 899</p>
            </div>
            <div class="email">
                <img src={email} alt="" /><br />
                <a href="">EMAIL</a>
                <p>ietcint@hotmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact