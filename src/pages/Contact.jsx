import React from "react";
import { assets } from "../assets/assets";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-8">

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[url('/src/assets/heroImage.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold">
            Contact QuickStay
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            We’re here to help you plan your perfect stay. Reach out anytime.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you need help with bookings, partnerships, or general
            inquiries, our support team is always ready to assist you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={assets.locationIcon} alt="" className="h-5" />
              <p>New York, London, Dubai, Singapore</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={assets.userIcon} alt="" className="h-5" />
              <p>support@quickstay.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={assets.guestsIcon} alt="" className="h-5" />
              <p>+1 (800) 456-7890</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <img src={assets.instagramIcon} alt="" className="h-6 cursor-pointer" />
            <img src={assets.facebookIcon} alt="" className="h-6 cursor-pointer" />
            <img src={assets.twitterIcon} alt="" className="h-6 cursor-pointer" />
            <img src={assets.linkendinIcon} alt="" className="h-6 cursor-pointer" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-black"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map / CTA Section */}
      <section className="bg-black text-white py-12 text-center px-6">
        <h2 className="text-3xl font-playfair font-bold mb-4">
          Your Comfort Is Our Priority
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          From luxury resorts to budget-friendly stays, QuickStay ensures
          unforgettable experiences wherever you travel.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
