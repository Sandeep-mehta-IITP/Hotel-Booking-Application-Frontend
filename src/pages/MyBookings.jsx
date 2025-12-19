import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBookings, stripePayment } from "../APP/Slices/bookingSlice";
import { Loader, AlertCircle } from "lucide-react";

const MyBookings = () => {
  const dispatch = useDispatch();
  const {userData, isAuthenticated} = useSelector((state) => state?.auth);
  const {
    userBookings,
    loading: bookingLoading,
    error: bookingError,
  } = useSelector((state) => state.booking);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserBookings());
    }
  }, [dispatch, isAuthenticated]);

  const bookings = userBookings;
   console.log("Bookings", bookings);

  const handlePayment = async (bookingId) => {
    try {
      const result = await dispatch(stripePayment({bookingId})).unwrap();

      // Stripe checkout redirect
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error("Stripe payment failed:", error);
    }
  };

  if (bookingLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-white">
        {/* Loader Icon */}
        <Loader className="w-12 h-12 animate-spin font-semibold text-blue-600" />

        {/* Text */}
        <p className="text-gray-500 text-sm tracking-wide animate-pulse">
          Loading your bookings...
        </p>
      </div>
    );
  }

  if (bookingError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        {/* Error Icon */}
        <AlertCircle className="h-12 w-12 text-red-500" />

        {/* Error Text */}
        <p className="text-gray-700 text-sm tracking-wide">
          Failed to load your bookings
        </p>

        {/* Sub text */}
        <p className="text-gray-500 text-xs">
          Something went wrong. Please try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => dispatch(fetchUserBookings())}
          className="mt-3 px-5 py-2 text-sm rounded-full bg-primary text-white hover:opacity-90 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="py-28 md:pb-35 md:pt-32 md:px-16 lf:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just few clicks."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* ---- Hotel Details ----*/}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking?.room?.images?.[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />

              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking?.hotel?.name}
                  <span className="font-inter text-sm ml-1">
                    ({booking?.room?.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests-icon" />
                  <span>{booking.guests}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/*-------Date & Timings------*/}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/*-------Payment Status--------*/}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    booking.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button
                  onClick={() => handlePayment(booking?._id)}
                  className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
