import React from 'react';

const Address = () => {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <h1 className="text-4xl font-bold text-orange-300 tracking-[0.1em] underline">Visit Us</h1>
      <h3 className="text-3xl mt-2 text-blue-300">NEW DELHI</h3>
      <p className="mt-4 text-lg px-4">
        He & She Industries Pvt. Ltd.<br />
        18, Pusa Road<br />
        New Delhi - 110005<br /><br />
        
        For Distributorship & Complaints<br />
        <b>Email</b>: enquiry@He&She.co.in<br />
        <b>Phone</b>: 012-47464444<br /><br />
 
        Product Related Query<br />
        <b>Phone</b>: +91 9671500444<br />
        <b>Email</b>: Care@He&She.co.in
      </p>
    </div>
  );
}

export default Address;
