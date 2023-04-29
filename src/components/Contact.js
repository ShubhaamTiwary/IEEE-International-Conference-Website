import React from 'react'
import '../style/Contact.css'
import location from '../resources/location-sign-svgrepo-com.svg';
import email from '../resources/email-8-svgrepo-com.svg';
import call from '../resources/call-svgrepo-com.svg';

const Contact = () => {
  return (
    // ICEPSM
    // Super Corridor, Near Airport, Bada Bangarda, Indore, Madhya Pradesh 453112
    <div className='main-bar1'>
        <div class="bar1">
            <div class="venue">
                <img src={location} alt="" /><br />            
                <a href="">VENUE</a>
                <p>Symbiosis University of Applied Sciences<br />Super Corridor,Near Airport <br />Bada Bangarda<br />Indore, Madhya Pradesh 453112</p>
            </div>
            <div class="contact">
                <img src={call} alt="" /><br />
                <a href="">CONTACT</a>
                <p>+91-9285333022</p>
            </div>
            <div class="email">
                <img src={email} alt="" /><br />
                <a href="">EMAIL</a>
                <p>conference@suas.ac.in</p>
            </div>
        </div>
    </div>
  )
}

export default Contact