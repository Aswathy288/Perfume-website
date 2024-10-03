import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Address from "../Components/Address";
import Bottom from "../Components/Bottom";

const Contact = () => {
  const contactForm = useRef();
  const [contactMessage, setContactMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kas1koq', 'template_5ixye56', contactForm.current, 'TKY1z80JnZrfGAYg_')
      .then(() => {
        setContactMessage('Message sent successfully ✅');
        e.target.reset();
        setTimeout(() => {
          setContactMessage('');
        }, 5000);
      }, () => {
        setContactMessage('Message not sent (service error) ❌');
      });
  };

  return (
    <>
     <div 
      className=" min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://cdn.create.vista.com/api/media/medium/386935954/stock-photo-top-view-aroma-sticks-perfume-bottle-spa-stones-towel-white?token=')" }}>
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <form ref={contactForm} onSubmit={sendEmail} className="contact__form">
          <div className="grid grid-cols-1 gap-4">
            <div className="contact__box">
            <label htmlFor="name" className="contact__label text-lg">First Name</label>
              <input type="text" name="user_name" className="contact__input p-3 border rounded w-full text-lg" required placeholder="First Name" />
              
            </div>
            <div className="contact__box">
            <label htmlFor="email" className="contact__label text-lg">Email Address</label>
              <input type="email" name="user_email" className="contact__input p-3 border rounded w-full text-lg" required placeholder="Email Address" />
            
            </div>
            <div className="contact__box">
            <label htmlFor="subject" className="contact__label text-lg">Subject</label>
              <input type="text" name="user_subject" className="contact__input p-3 border rounded w-full text-lg" required placeholder="Subject" />
              
            </div>
            <div className="contact__box contact__area">
            <label htmlFor="message" className="contact__label text-lg">Message</label>
              <textarea name="user_message" className="contact__input p-3 border rounded w-full text-lg" required placeholder="Message"></textarea>
              
            </div>
          </div>

          {contactMessage && (
            <p className={`contact__message mt-4 text-center ${contactMessage.includes('not sent') ? 'text-red-500' : 'text-green-500'}`}>
              {contactMessage}
            </p>
          )}

          <button type="submit" className="contact__button w-full mt-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-lg">
            <i className="ri-send-plane-line"></i> Send Message
          </button>
        </form>
      </div>
      <Address/>
      </div>
      <Bottom/>
    </>
  );
};

export default Contact;
