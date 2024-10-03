import React from 'react';

const About = () => {
  return (
    <div style={{ border: '1px solid black', backgroundColor: 'black' }}>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.freepik.com/premium-photo/close-up-luxurious-perfume-bottle-with-water-droplets-minimalist-black-background_1166177-10773.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full">
            <h1 className="mb-5 text-6xl font-bold">About Us</h1> {/* Increased title size */}
            <p className="mb-5 text-lg md:text-3xl"> {/* Increased paragraph size */}
              Hello, This is He & She, where scent becomes a signature!
              Our passion for fragrance transcends the ordinary, offering an exquisite collection of perfumes crafted for both men and women.
              At He & She, we believe that every scent tells a story, and our curated selection captures the essence of individuality and elegance.
              Whether you’re looking for a bold statement or a subtle allure, our diverse range caters to every personality and occasion.
              Join us on a fragrant journey and discover the perfect scent that reflects your unique identity.
              Embrace your essence with He & She!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
