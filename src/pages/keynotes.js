import React from 'react'
import SVM from '../images/SWM.jpg';
import VCS from '../images/VCS.jpg';

const keynotes = () => {
  return (
    <div class="kimg">
        <div class="swm">
            <img src={VCS} className='imggg'/>
            <div class="para1up">
                <div class="para1"><p id="p1">Dr. Prithvi Yadav<br />
                    Vice-Chancellor<br />
                    Symbiosis University of Applied Sciences (SUAS), Indore</p></div>

                <div class="para2"><p id="p2">The Symbiosis University of Applied Sciences, Indore is the first Skill Development
                    University with unmatched innovations in curricula suitable to generate a steady stream of skilled,
                    industry-ready professionals for high growth and high employment sectors such as banking, financial
                    services and insurance; retailing and e-commerce; computer science and information technology; and
                    automobile engineering and mechatronics. In order to meet this requirement, the Symbiosis University
                    of Applied Sciences, Indore was set up by the Government of Madhya Pradesh under the Madhya Pradesh
                    Niji Vishwavidyalay Adhiniyam, 2007.</p></div>
            </div>
            <br /><br />
        </div>
        <div class="swm">
            <img src={SVM} className='imggg'/>
            <div class="para1up">
                <div class="para1"><p id="p1">Dr. Swati Mujumdar<br />
                    Pro-Chancellor<br />
                    Symbiosis University of Applied Sciences (SUAS), Indore</p></div>

                <div class="para2"><p id="p2">At the same time, students completing graduation from conventional Universities are unable to find jobs due to lack of skills as per industry needs. To bridge this gap, the Symbiosis University of Applied Sciences offers degree programmes as well as short-term courses at all levels in high growth sectors. We have entered into collaborations with top industries such as MAN Trucks, John Deere, Volvo Eicher, Future Group (BIG Bazaar & Centrals), HDFC Bank, L&T and Reliance Capital.

                </p></div>
            </div>
            <br /><br />
        </div>
    </div>
  )
}

export default keynotes