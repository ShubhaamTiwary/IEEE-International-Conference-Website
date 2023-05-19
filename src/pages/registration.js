import React from 'react'
import img from '../resources/registration_static.png'
import '../style/Registration.css'

const registration = () => {
  return (
    <div className='main-registartion'>
      <img src={img} id='static-img-register'/>
    </div>
  )
}

export default registration