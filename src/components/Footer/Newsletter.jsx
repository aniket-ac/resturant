import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app_newsLetter'>
    <div className='app_newsLetter-heading'>
      <SubHeading title="News Letter"/>
      <h1 className='headtext_cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p_opensans'>And never miss latest Updates!</p>
    </div>
    
    <div className='app_newsLetter-input flex_center'>
      <input type="email" placeholder='Enter your Email' />
      <button className='custom_button'>Subscribe</button>
    </div>

  </div>
);

export default Newsletter;
