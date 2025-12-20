import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setShowHotelReg } from "../APP/Slices/uiSlice";
import { registerHotel } from "../APP/Slices/hotelSlice";
import { fetchUserData } from "../APP/Slices/userSlice";

const HotelReg = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.hotel);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCloseHotelReg = () => {
    if (!loading) {
      dispatch(setShowHotelReg(false));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(registerHotel(formData)).unwrap();
      dispatch(fetchUserData());
      handleCloseHotelReg();
    } catch (err) {
      // error already handled in slice
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white rounded-xl max-w-4xl max-md:mx-2"
      >
        <img
          src={assets.regImage}
          alt="reg"
          className="w-1/2 rounded-xl hidden md:block"
        />

        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close"
            className={`absolute top-4 right-4 h-4 w-4 ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={handleCloseHotelReg}
          />

          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Hotel Name</label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
            />
          </div>

          {/* Phone */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Phone</label>
            <input
              id="contact"
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
            />
          </div>

          {/* Address */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Address</label>
            <input
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
            />
          </div>

          {/* City */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label className="font-medium text-gray-500">City</label>
            <input
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
            />
          </div>

          <button
            disabled={loading}
            className={`mt-6 px-6 py-2 rounded text-white mr-auto ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
