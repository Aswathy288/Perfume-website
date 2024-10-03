import React, { useState } from "react";
import Bottom from "../Components/Bottom";
import Carousel from "../Components/Carousel";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const newPerfumes = [
    {
      id: 1,
      name: "Chloé Eau de Parfum-75mL",
      price: 160,
      description: "A fresh floral scent that embodies a modern femininity.",
      img: "https://www.myperfumeshop.com.au/cdn/shop/products/chloe-edp-perfume-cologne-110354.jpg?v=1694215410&width=1500"
    },
    {
      id: 2,
      name: "Giorgio Armani Si-100mL",
      price: 130,
      description: "A sophisticated blend of blackcurrant and floral notes.",
      img: "https://www.expressgiftservice.com/image/cache/data/expressgifts/images1000/giorgio-armani-si-edp-100ml-for-women-perfume-500x500.jpg"
    },
    {
      id: 3,
      name: "Marc Jacobs Daisy Dream-50mL",
      price: 100,
      description: "A fruity floral scent with a whimsical touch.",
      img: "https://en.excaliburshop.com/uploads/item/5607/template/108/images/0-marc-jacobs-daisy-dream-edt-50ml-img-0543.jpg"
    },
    {
      id: 4,
      name: "Yves Saint Laurent Mon Paris-90mL",
      price: 120,
      description: "A sweet and fruity fragrance with notes of strawberry and raspberry.",
      img: "https://perfumegallery.ae/cdn/shop/products/29974_4.jpg?v=1665138817&width=1946"
    },
    {
      id: 5,
      name: "Lancome La Vie Est Belle-100mL",
      price: 145,
      description: "A beautiful and elegant fragrance with notes of iris and patchouli.",
      img: "https://www.houseoffraser.co.uk/images/imgzoom/75/75120369_xxl_a1.jpg"
    },
    {
      id: 6,
      name: "Riya Florify Rare-80mL",
      price: 135,
      description: "A sweet and playful fragrance with caramel and vanilla notes.",
      img: "https://www.jiomart.com/images/product/original/rvidiwjgox/riya-florify-rare-luxury-perfume-for-women-100ml-eau-de-parfum-spray-long-lasting-fine-fragrance-chypre-fruity-best-perfume-for-women-by-design-house-of-riya-product-images-orvidiwjgox-p606796592-1-202401031448.jpg?im=Resize=(420,420)"
    },
    {
      id: 7,
      name: "La French Bespoke-30mL",
      price: 120,
      description: "A warm and spicy scent perfect for cooler months.",
      img: "https://rukminim2.flixcart.com/image/720/864/xif0q/perfume/7/9/n/30-bespoke-perfume-for-men-premium-luxury-long-lasting-fragrance-original-imagrgzabfwy9ged.jpeg?q=60&crop=false"
    },
    {
      id: 8,
      name: "Versace Eros-100mL",
      price: 135,
      description: "A vibrant and fresh fragrance with mint and green apple notes.",
      img: "https://www.fashionbeans.com/wp-content/uploads/2023/07/gil.aroma_VersaceEros.jpg"
    },
    {
      id: 9,
      name: "Archies Endless Passion-100mL",
      price: 110,
      description: "A modern and refined fragrance with woody and spicy notes.",
      img: "https://m.media-amazon.com/images/I/51nkl0H0ouL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 10,
      name: "Guess Seductive-100mL",
      price: 150,
      description: "An explosive and fresh fragrance with notes of bergamot.",
      img: "https://i0.wp.com/elegance-suisse.ch/wp-content/uploads/chanel-n-5-1.jpg?resize=1000%2C1000&ssl=1"
    },
    {
      id: 11,
      name: "Aafiya Perfume-100mL",
      price: 70,
      description: "A fresh aquatic fragrance ideal for everyday wear.",
      img: "https://aafiyaperfumes.com/cdn/shop/products/14.jpg?v=1721711370&width=1946"
    },
    {
      id: 12,
      name: "French Essence-100mL",
      price: 85,
      description: "A citrus aromatic scent that is fresh and lively.",
      img: "https://www.frenchessence.com/cdn/shop/files/6_61e3c6d6-6ddd-482e-8637-ee9dcb04d37c.jpg?v=1705747479"
    },
  ];

  const filteredPerfumes = newPerfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Carousel />
      <h1 className="text-3xl font-bold text-center my-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
      Latest Perfume Collections
    </h1>
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://img.pikbest.com/ai/illus_our/20230427/c32ff6030bb7009da35db059eef889cb.jpg!sw800')" }} 
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

export default Home;
