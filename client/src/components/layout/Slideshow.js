import React from 'react';

const Slideshow = () => {
  return (
    <div className='slideshow'>
      <div className='slideshow-item'>
        <a href='https://www.skincare.com/'>
          <img src='/img/image1.jpg' alt='' />
        </a>
        <div className='slideshow-item-text'>
          <h5>Write text here</h5>
          <p>para here...</p>
        </div>
      </div>

      <div className='slideshow-item'>
        <img src='/img/image3.jpg' alt='' />
        <div className='slideshow-item-text'>
          <h5>Write text here</h5>
          <p>para here...</p>
        </div>
      </div>

      <div className='slideshow-item'>
        <img src='/img/image4.jpg' alt='' />
        <div className='slideshow-item-text'>
          <h5>Write text here</h5>
          <p>para here...</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
