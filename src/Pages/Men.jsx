import React, { useState } from 'react';
import Bottom from "../Components/Bottom";

const Men = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const perfumes = [
    {
      id: 1,
      name: "Envy Blue Luxury-60ml",
      price: 100,
      description: "It smells pleasant - kind of fresh and woody.",
      img: "https://envyfragrances.com/cdn/shop/files/71UKx-aDg_L._SY450_450x_8e7203fa-8fb9-4429-b40a-e9a7812d09a0.jpg?v=1712726371"
    },
    {
      id: 2,
      name: "Tom Ford Noir Extreme-80ml",
      price: 150,
      description: "Noir extreme smells like sweet and delicious blackberries.",
      img: "https://www.fridaycharm.com/cdn/shop/files/TomFordNoirExtreme1.jpg?v=1684823199"
    },
    {
      id: 3,
      name: "Wild Stone-60ml",
      price: 200,
      description: "Wild stone is an ultra sensual and edgy perfume.",
      img: "https://m.media-amazon.com/images/I/61TYei9ZnlL.jpg"
    },
    {
      id: 4,
      name: "Skinn by Titan-100 mL",
      price: 250,
      description: "Long-lasting fragrances for Men by Skinn.",
      img: "https://m.media-amazon.com/images/I/61yPezKr0zL._SL1000_.jpg"
    },
    {
      id: 5,
      name: "Beardo-120mL",
      price: 300,
      description: "Refreshing and manly fragrance, strong aqua and musky tones.",
      img: "https://beardo.in/cdn/shop/products/OriginPerfumeForMen100ml2160x216001.jpg?v=1681803897"
    },
    {
      id: 6,
      name: "Villain Oud-100mL",
      price: 350,
      description: "A pleasing fragrance that’s suitable for both indoor and outdoor occasions.",
      img: "https://richesm.com/wp-content/uploads/2021/11/Villain-Oud-Eau-De-Parfum-For-Men-100-ml-6.jpg"
    },
  ];

  // Filter perfumes based on search query
  const filteredPerfumes = perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://previews.123rf.com/images/gulzarkarimn/gulzarkarimn2305/gulzarkarimn230502565/205053047-perfume-bottle-on-blue-background-with-water-drops-3d-illustration.jpg')" }} 
      >
        <div className="flex flex-col items-center pt-10">
          {/* Search Input */}
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

export default Men;
