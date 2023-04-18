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
        <p>The Third International Conference on Emerging Techniques in Computational Intelligence, ICETCI 2023 will be held at Mahindra University, Hyderabad, India, from September 21 to 23, 2023. The conference will consist of one day of tutorial sessions followed by two days of keynote lectures by invited experts and technical paper presentations by practitioners. We invite submission of papers from all areas of Computational Intelligence, both emerging topics which form the theme of the conference as well as more established areas, presenting developments in algorithms as well as applications. All papers will pass through a multiple peer-review process, and accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
        <br />
        <p>Proceedings of the Second ICETCI held in 2022 are now live on IEEE Xplore</p>
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
            <p>The Conference will be supported by industry relevant tutorials conducted by NVIDIA, Tech Mahindra, etc.</p>
            </div>
            <div className='sponsors-logos'>
                <img src={spons} />
            </div>
        </div>
    </div>
  )
}

export default About