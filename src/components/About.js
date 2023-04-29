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
        <p>The first International Conference on Emerging Technology and Skill Management 
        (ICETSM 2023) will be held during December 15-16, 2023 at Symbiosis University of 
        Applied Sciences, Indore, Madhya Pradesh, India. The conference is sponsored by 
        IEEE MP section.
        <br />
            <p>ICETSM 2023 is designed to cater to the diversified need of academicians, 
    researchers, and industry professionals. It is intended to bring multidisciplinary 
    research on emerging technology and skill management to a platform where the 
    participants can exchange their ideas, innovation, best practices, real-time problems, 
    and possible solutions. Plenary keynote speeches are planned to nurture the technical 
    needs of the participants. All accepted and presented papers will be submitted for 
    possible publication in IEEE Xplore® Digital Library (Conference Record #58830), 
    through the IEEE Conference Publications Program (CPP). We invite researchers, 
    faculty members, industry professionals, and practitioners from around the globe to 
    present their research articles and expand their networking by connecting with the 
    pioneer of the respective field.</p>
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