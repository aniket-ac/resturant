import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app_header app_wrapper section_padding' id='home'>
    <div className='app_wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app_header-h1'>The key to find Dining</h1>
      <p className='p_opensans' style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. 
        Condimentum volutpat morbi facilisis quam scelerisque 
        sapien. Et, penatibus aliquam amet tellus
      </p>
      <button type='button' className='custom_button'>Explore Menu</button>
    </div>

    <div className='app_wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
