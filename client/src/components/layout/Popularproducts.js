import React from 'react';
import Lateststories from './Lateststories';

const Popularproducts = () => {
  return (
    <div className='popularproducts'>
      <h1>Popular products</h1>
      <span></span>

      <div className='responsive'>
        <div className='gallery'>
          <a href='product1.jpg'>
            <img src='/img/product1.jpg' alt='' width='300' height='200' />
          </a>
          <div className='des'>Add a Description of the image</div>
        </div>
      </div>

      <div className='responsive'>
        <div className='gallery'>
          <a href='image1.jpg'>
            <img src='/img/img6.jpg' alt='' width='300' height='200' />
          </a>
          <div className='des'>Add a Description of the image</div>
        </div>
      </div>

      <div className='responsive'>
        <div className='gallery'>
          <a href='image3.jpg'>
            <img src='/img/img1.jpg' alt='' width='300' height='200' />
          </a>
          <div className='des'>Add a Description of the image</div>
        </div>
      </div>

      <div className='responsive'>
        <div className='gallery'>
          <a href='image3.jpg'>
            <img src='/img/img7.jpg' alt='' width='300' height='200' />
          </a>
          <div className='des'>Add a Description of the image</div>
        </div>
      </div>
    </div>
  );
};

export default Popularproducts;
