import React from 'react';
import img_static from '../resources/CFP_static.png';
import '../style/cfp.css';

const cfp = () => {
  return (
    <div className='main-callForPapers'>
      <img src={img_static} id='static-img-callForPapers'/>
    </div>
  )
}

export default cfp