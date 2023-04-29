import React from 'react'
import '../style/ImageSlider.css'
import frame1 from '../resources/Symb1.png';
import frame2 from '../resources/symbi2.png';
import frame3 from '../resources/Frame 55.svg';
import frame4 from '../resources/Frame 56.svg';
import frame5 from '../resources/Frame 57.svg';
import frame6 from '../resources/Frame 58.svg';


const ImageSlider = () => {
  return (
    <div className='img-static-fixed'>
      <img src={frame1} />
    </div>
  // <div class="slider">
  //   <div class="slides">
  //     <input type="radio" name="radio-btn" id="radio1" />
  //     <input type="radio" name="radio-btn" id="radio2" />
  //     <input type="radio" name="radio-btn" id="radio3" />
  //     <input type="radio" name="radio-btn" id="radio4" />
  //     <input type="radio" name="radio-btn" id="radio5" />
  //     <input type="radio" name="radio-btn" id="radio6" />
  //     <div class="slide first">
  //       <img src={frame1} alt="" />
  //     </div>
  //     <div class="slide">
  //       <img src={frame2}alt="" />
  //     </div>
  //     <div class="slide">
  //       <img src={frame3} alt="" />
  //     </div>
  //     <div class="slide">
  //       <img src={frame4} alt="" />
  //     </div>
  //     <div class="slide">
  //         <img src={frame5} alt="" />
  //     </div>
  //     <div class="slide">
  //         <img src={frame6} alt="" />
  //     </div>
    
  //     <div class="navigation-auto">
  //       <div class="auto-btn1"></div>
  //       <div class="auto-btn2"></div>
  //       <div class="auto-btn3"></div>
  //       <div class="auto-btn4"></div>
  //       <div class="auto-btn5"></div>
  //       <div class="auto-btn6"></div>
  //     </div>
     
  //   </div>
   
  //   <div class="navigation-manual">
  //     <label for="radio1" class="manual-btn"></label>
  //     <label for="radio2" class="manual-btn"></label>
  //     <label for="radio3" class="manual-btn"></label>
  //     <label for="radio4" class="manual-btn"></label>
  //     <label for="radio5" class="manual-btn"></label>
  //     <label for="radio6" class="manual-btn"></label>
  //   </div>
  // </div>
  )
}

export default ImageSlider