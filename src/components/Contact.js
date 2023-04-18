import React from 'react'
import '../style/Contact.css'
import location from '../resources/location.svg';
import email from '../resources/email.svg';
import call from '../resources/call.svg';

const Contact = () => {
  return (
    <div className='contact-main'>
        Contact Details
        <div className='venue'>
            <div className='v-logo'>
              
            </div>
            <div className='v-header'>
            </div>
            <div className='v-content'>
              <p></p>
            </div>
        </div>
        <div className='contact'>
            <div className='c-logo'>
            
            </div>
            <div className='c-header'>
            </div>
            <div className='c-content'>
            </div>
        </div>
        <div className='email'>
            <div className='e-logo'>
            </div>
            <div className='e-header'>
            </div>
            <div className='e-content'>
            </div>
        </div>
    </div>
  )
}

export default Contact