import React from 'react'
import '../style/Header.css'
import iee_logo from '../resources/ieee_logo.svg'
import logo_suas from '../resources/logo_suas.svg'

const Header = () => {
  return (
    <div className='OuterDiv'>
      <img className='suas-logo' src={logo_suas} />
    <div className='main'>
      <div className='H1'>
      The First International Conference on 
      </div>
      <div className='H2'>
      Emerging Technology and Skill Management
      </div>
      <div className='date'>
      DECEMBER 15 - 16 | Indore, India
      </div>
      <hr />
      <div className='suas'>
      Technically Co-Sponsored by IEEE MP Section
      </div>
      
    </div>
    <img className='iee-logo' src={iee_logo} />
    </div>
  )
}

export default Header