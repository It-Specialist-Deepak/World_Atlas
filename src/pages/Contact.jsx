import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom close button component
const CustomCloseButton = ({ closeToast }) => (
  <button onClick={closeToast} style={{ color: 'white', background: 'transparent', border: 'none' }}>
    ✖
  </button>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          closeButton: <CustomCloseButton />, // Using custom close button
          style: { backgroundColor: "#000000", color: "#fff" },
        });
        setFormData({ username: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Failed to send message.', {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        closeButton: <CustomCloseButton />, // Using custom close button
        style: { backgroundColor: "#000000", color: "#fff" },
      });
    }
  };

  return (
    <section className='bg-black text-white py-20 px-6 sm:px-10 md:px-20 lg:px-36'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10'>Contact Us</h2>
      <form className='max-w-xl mx-auto p-6 rounded-lg shadow-md flex flex-col items-center' onSubmit={handleSubmit}>
        <div className='mb-3 w-full flex justify-center'>
          <input
            type="text"
            name="username"
            id="username"
            className="w-3/4 p-2.5 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
            placeholder='Enter your name'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3 w-full flex justify-center'>
          <input
            type="email"
            name="email"
            id="email"
            className="w-3/4 p-2.5 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3 w-full flex justify-center'>
          <textarea
            name="message"
            rows="4"
            id="message"
            className="w-3/4 p-2.5 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-3/4 bg-zinc-700 hover:bg-black text-white font-semibold py-2.5 rounded-md transition-colors duration-300"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};
