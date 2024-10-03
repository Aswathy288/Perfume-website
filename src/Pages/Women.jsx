import React, { useState } from 'react';
import Bottom from "../Components/Bottom";

const Women = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const perfumes = [
    {
      id: 1,
      name: "Bella Vita Luxury-100mL",
      price: 150,
      description: "Its long-lasting scent will keep you feeling fresh and spirited all day.",
      img: "https://www.yuvaflowers.com/cdn/shop/files/bella-vita-luxury-ceo-woman-eau-de-parfum-perfume-with-ylang-ylang-vanilla-musk-tonka-plum-spicy-long-lasting-edp-liquid-fragrance-scent-for-women-100ml-visit-the-bella-vita-luxury-st.jpg?v=1711903330"
    },
    {
      id: 2,
      name: "Renee Bloom-80ml",
      price: 150,
      description: "This perfume has a romantic floral fragrance that keeps your senses awake.",
      img: "https://m.media-amazon.com/images/I/71VnsitWr7L._SX569_.jpg"
    },
    {
      id: 3,
      name: "Carlton London-100mL",
      price: 250,
      description: "Boasting an alluring fragrance, this perfume leaves a lasting impression.",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/n/t/h/100-women-limited-edition-blush-eau-de-parfum-100-ml-perfume-original-imahfgytguachhhj.jpeg?q=90&crop=false"
    },
    {
      id: 4,
      name: "FREED Marina Bae -80 mL",
      price: 600,
      description: "This fragrance introduces bold intensity to light female fragrances.",
      img: "https://m.media-amazon.com/images/I/71335gvqtRL._SX569_.jpg"
    },
    {
      id: 5,
      name: "Wottagirl-120mL",
      price: 300,
      description: "Designed for flexibility, apply the perfume on body or clothes.",
      img: "https://m.media-amazon.com/images/I/51npxarn2WL._SX569_.jpg"
    },
    {
      id: 6,
      name: "Vanesa Desire-100mL",
      price: 350,
      description: "The scent evokes positive emotions and reduces stress.",
      img: "https://vanesastore.com/cdn/shop/files/Artboard6_1500x.png?v=1715945183"
    },
  ];

  const filteredPerfumes = perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFAMBwj_zt92UPaWm9MkMFdRUoMmXPwt6Fg&s')" }} 
      >
        <div className="flex flex-col items-center pt-10">
          <input
            type="text"
            placeholder="Search for perfumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered mb-4 w-80"
          />
          <div className="flex flex-wrap justify-center">
            {filteredPerfumes.map(perfume => (
              <div key={perfume.id} className="card bg-base-100 w-96 shadow-xl mb-4 mx-2 mt-10">
                <figure className="px-10 pt-10">
                  <img src={perfume.img} alt={perfume.name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{perfume.name}</h2>
                  <h3><b>Price: ${perfume.price}</b></h3>
                  <p>{perfume.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
}

export default Women;
