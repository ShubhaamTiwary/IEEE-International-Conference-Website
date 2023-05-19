import React from 'react'
import '../style/keynotes.css';
import SVM from '../images/SWM.jpg';
import VCS from '../images/VCS.jpg';

const keynotes = () => {
  return (
    <div className='kimg'>  
        <div className="swm">
            <img src={SVM} id='my-img'/>
            <div className="para1up">
                <div className="para111">
                    <p id="p111">Dr. Swati Mujumdar<br />
                    Pro-Chancellor<br />
                    Symbiosis University of Applied Sciences (SUAS), Indore</p></div>
                <div className="para222">
                    <p id="p222">At the same time, students completing graduation from conventional Universities are unable to find jobs due to lack of skills as per industry needs. To bridge this gap, the Symbiosis University of Applied Sciences offers degree programmes as well as short-term courses at all levels in high growth sectors. We have entered into collaborations with top industries such as MAN Trucks, John Deere, Volvo Eicher, Future Group (BIG Bazaar & Centrals), HDFC Bank, L&T and Reliance Capital.
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
        <div className="swm">
            <img src={VCS} id='my-img' />
            <div className="para1up">
                <div className="para111">
                    <p id="p111">Dr. Prithvi Yadav<br />
                    Vice-Chancellor<br />
                    Symbiosis University of Applied Sciences (SUAS), Indore</p>
                </div>

                <div className="para222">
                    <p id="p222">The Symbiosis University of Applied Sciences, Indore is the first Skill Development
                    University with unmatched innovations in curricula suitable to generate a steady stream of skilled,
                    industry-ready professionals for high growth and high employment sectors such as banking, financial
                    services and insurance; retailing and e-commerce; computer science and information technology; and
                    automobile engineering and mechatronics. In order to meet this requirement, the Symbiosis University
                    of Applied Sciences, Indore was set up by the Government of Madhya Pradesh under the Madhya Pradesh
                    Niji Vishwavidyalay Adhiniyam, 2007.</p>
                </div>
            </div>
            <br /><br />
        </div>
    </div>
  )
}

export default keynotes