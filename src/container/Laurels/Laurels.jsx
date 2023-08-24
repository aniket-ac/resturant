import React from 'react';

import { images, data } from '../../constants';
import { SubHeading } from '../../components';

import './Laurels.css'

const AwardCard = ({award:{imgUrl,title,subtitle}}) => (
  <div className='app_laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app_laurels_awards-card_content'>
      <p className='p_cormorant' style={{color : '#DCCA87'}}>{title}</p>
      <p className='p_cormorant'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app_bg app_wrapper section_padding' id='awards'>
    <div className='app_wrapper_info'>
      <SubHeading title="Awards & Recognition"/>
      <h1 className='headtext_cormorant'>Our Laurels</h1>

      <div className='app_laurels_awards'>
        {data.awards.map((award)=> <AwardCard award={award} key={award.key}/>)}
      </div>
    </div>
    <div className='app_wrapper_img'>
      <img src={images.laurels} alt="laurels" />
    </div>    
  </div>
);

export default Laurels;
