import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app_special flex_center section_padding' id='menu'>
    <div className='app_splecial-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext_cormorant'>Today's Special</h1>

    </div>
    <div className='app_special-menu'>
      <div className='app_special-menu_wine flex_center'>
        <p className='app_special-menu_heading'>Wine and Beer</p>
        <div className='app_special-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app_special-menu_img'>
        <img src={images.menu} alt="menu" />
      </div>

      <div className='app_special-menu_cocktails flex_center'>
        <p className='app_special-menu_heading'>Cocktails</p>
        <div className='app_special-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: 15}}>
      <button type='button' className='custom_button'>VIew More</button>
    </div>
  </div>
);

export default SpecialMenu;
