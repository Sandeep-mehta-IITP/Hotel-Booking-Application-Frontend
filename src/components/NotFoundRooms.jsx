import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NotFoundRooms = ({ searchQuery }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      {/* Illustration */}
      <img
        src={assets.notFoundImage} 
        alt="No results"
        className="w-64 h-64 md:w-80 md:h-80 mb-6 object-contain animate-fadeIn"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        No Hotels Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md text-center leading-relaxed">
        Sorry, we couldn&apos;t find any hotels in{" "}
        <span className="font-medium text-primary">{searchQuery}</span>. Try
        searching another city or adjusting your dates and filters.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary hover:bg-primary-dark cursor-pointer text-white rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Go Back Home
        </button>
        <button
          onClick={() => navigate("/rooms")}
          className="px-6 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300"
        >
          View All Hotels
        </button>
      </div>

      {/* Suggestion Text */}
      <p className="mt-8 text-sm sm:text-base text-gray-500 max-w-md text-center">
        Tip: Try different filters, dates, or cities to find the perfect stay.
      </p>
    </div>
  );
};

export default NotFoundRooms;
