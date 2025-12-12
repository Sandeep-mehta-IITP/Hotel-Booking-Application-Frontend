import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setShowHotelReg } from "../APP/Slices/uiSlice";
import { registerHotel } from "../APP/Slices/hotelSlice";

const HotelReg = () => {
  // const showHotelReg = useSelector((state) => state.ui.showHotelReg);
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
    dispatch(setShowHotelReg(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerHotel(formData)).then((res) => {
      if (res.type === "hotel/registerHotel/fulfilled") {
        handleCloseHotelReg();
      }
    });
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white rounded-xl max-w-4xl max-md:mx-2"
      >
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />

        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
            onClick={() => handleCloseHotelReg()}
          />
          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>

          {/* ERROR */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/*----Hotel Name-----*/}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/*----Phone-----*/}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/*----Address-----*/}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/*----Select City Drop Down-----*/}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>

            <select
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={loading}
            className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
