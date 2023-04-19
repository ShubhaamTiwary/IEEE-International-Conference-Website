import React from 'react'
import '../style/About.css'
import ieee_logo from '../resources/ieee_logo.svg'
import spons from '../resources/Group-spons.png'
const flyer_url='http://localhost:3000/Flyer';

const About = () => {
    const downloadFileAtURL =(url) =>{
        const filename="Flyer.pdf";
        const aTag=document.createElement('a');
        aTag.href=url
        aTag.setAttribute('download',filename);
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }
  return (
    <div className='main-about'>
        <div className='Heading'>
            About Conference
        </div>
        <div className='AboutContent'>
        <p>The First International Conference on Emerging Technology and Skill Management (ICETSM) will be held on December 15-16, in Indore, India. The conference is technically co-sponsored by IEEE MP Section, and the host university is Symbiosis University of Applied Sciences.ICETSM 2023 aims to provide a platform for researchers, academicians, industry practitioners, and students to exchange and share their knowledge and experiences in the emerging areas of technology and skill management. The conference will include keynote speeches, technical paper presentations, and panel discussions.It aims to bring together individuals from academia, industry, and government organizations to share their knowledge, experiences, and best practices. We look forward to welcoming you to Indore, India, for this exciting conference.
        <br />
        <p>Below is the IEEE Flyer oor ICEPSM 2023</p>
        </p>
        </div>
        <div className='ieeeLogo'>
            <img src={ieee_logo} />
        </div>
        <div className='IEEE-Flyer'>
          <button onClick={()=>{downloadFileAtURL(flyer_url)}}>Download IEEE Flyer 2023</button>
        </div>
        <div className='sponsors'>
            <div className='sponsors-title'>
            <p>The Conference will be supported by industry relevant tutorials conducted by Infosys, TCS, Computer Society, etc </p>
            </div>
            <div className='sponsors-logos'>
                <img src={spons} />
            </div>
        </div>
    </div>
  )
}

export default About