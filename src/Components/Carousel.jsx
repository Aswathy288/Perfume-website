import React from 'react';
// https://bellavitaluxury.co.in/cdn/shop/files/Offer-Banner-2_1.jpg?v=1715081096&width=1920

const Carousel = () => {
  return (
    <div className='w-full'style={{ backgroundColor: 'white'  }}>
         
         <div className="carousel w-full mt-24" >
  <div id="slide1" className="carousel-item relative w-screen h-screen">
    <img
      src="https://bellavitaluxury.co.in/cdn/shop/files/Offer-Banner-2_1.jpg?v=1715081096&width=1920
"
      className="w-screen h-screen  " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-screen h-screen">
    <img
      src="https://luxuryperfume.com/cdn/shop/files/2_1920x_d80021a5-88ef-4b1b-a986-654650c8e158.jpg?v=1684304882"
      className="w-screen h-screen" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-screen h-screen">
    <img
      src="https://aseemperfume.com/storage/all-new/aseem-website-banner-3.jpg"
      className="w-screen h-screen" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-screen h-screen">
    <img
      src="https://cdn.fragrancenet.com/images/fragnet/homepage/HP_New_Arrivals_20200414.jpg"
      className="w-screen h-screen" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     
    </div>
  );
}

export default Carousel;
