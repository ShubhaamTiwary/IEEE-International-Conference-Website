import React from 'react'
import '../style/commitee.css';
import sta from '../resources/committee_static.png'

const committee = () => {
  return (
    <div className='main-committe'>
      <img src={sta} id='committee_staic'/>
    </div>
  )
}

export default committee