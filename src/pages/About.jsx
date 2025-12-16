import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 text-gray-800">
      
      {/* Page Title */}
      <Title
        title="About QuickStay"
        subTitle="Redefining the way you discover, book, and experience luxury hotels worldwide."
        align="center"
      />

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
        <div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            The Ultimate Hotel Booking Experience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            QuickStay is a modern hotel booking platform built for travelers who
            value comfort, trust, and seamless experiences. From luxury resorts
            to city hotels, we connect you with carefully curated stays across
            the globe.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our mission is simple — make hotel booking fast, secure, and
            enjoyable while ensuring premium quality at every step.
          </p>
        </div>

        <img
          src={assets.regImage}
          alt="About QuickStay"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Why Choose Us */}
      <div className="mt-24">
        <h3 className="text-2xl font-semibold text-center mb-12">
          Why Choose QuickStay?
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img src={assets.badgeIcon} alt="" className="mx-auto h-10 mb-4" />
            <h4 className="font-semibold mb-2">Trusted Stays</h4>
            <p className="text-sm text-gray-600">
              Verified hotels with high standards of cleanliness and comfort.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img src={assets.locationIcon} alt="" className="mx-auto h-10 mb-4" />
            <h4 className="font-semibold mb-2">Prime Locations</h4>
            <p className="text-sm text-gray-600">
              Stay close to major attractions, business hubs, and city centers.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img src={assets.starIconFilled} alt="" className="mx-auto h-10 mb-4" />
            <h4 className="font-semibold mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-600">
              Handpicked hotels offering luxury, comfort, and reliability.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img src={assets.heartIcon} alt="" className="mx-auto h-10 mb-4" />
            <h4 className="font-semibold mb-2">Easy Booking</h4>
            <p className="text-sm text-gray-600">
              Simple, fast, and secure booking with flexible payment options.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-24 bg-gray-50 rounded-xl py-14 px-6 grid sm:grid-cols-3 text-center gap-8">
        <div>
          <h4 className="text-3xl font-bold text-black">500+</h4>
          <p className="text-gray-600 mt-1">Luxury Hotels</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-black">10K+</h4>
          <p className="text-gray-600 mt-1">Happy Guests</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-black">30+</h4>
          <p className="text-gray-600 mt-1">Global Cities</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          Travel Smart. Stay Luxurious.
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether you're planning a business trip or a dream vacation, QuickStay
          ensures a premium experience every time you book.
        </p>
        <button onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }} className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition cursor-pointer">
          Explore Hotels
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
