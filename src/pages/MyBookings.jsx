import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBookings, stripePayment } from "../APP/Slices/bookingSlice";
import { Loader, AlertCircle, RefreshCcw } from "lucide-react";

const MyBookings = () => {
  const dispatch = useDispatch();
  const { userData, isAuthenticated } = useSelector((state) => state?.auth);
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
  //console.log("Bookings", bookings);

  const handlePayment = async (bookingId) => {
    //console.log("booking id in mybooking", bookingId);

    try {
      const result = await dispatch(stripePayment({ bookingId })).unwrap();

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-2xl bg-white shadow-xl border border-gray-100">
          {/* Spinner with soft glow */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/20" />
            <Loader className="relative w-12 h-12 animate-spin text-blue-600" />
          </div>

          {/* Title */}
          <p className="text-sm font-medium text-gray-700 tracking-wide">
            Loading your bookings detials....
          </p>
        </div>
      </div>
    );
  }

  if (bookingError) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="flex flex-col items-center text-center gap-5 px-8 py-10 rounded-2xl bg-white shadow-xl border border-gray-100 max-w-sm w-full">
          {/* Icon with soft background */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50">
            <AlertCircle className="w-7 h-7 text-red-500" />
          </div>

          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800">
            Unable to load bookings
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            We couldn’t fetch your booking details right now. Please check your
            connection or try again.
          </p>

          {/* Actions */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => dispatch(fetchUserBookings())}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm cursor-pointer font-medium shadow hover:opacity-90 transition"
            >
              <RefreshCcw className="w-4 h-4" />
              Retry
            </button>
          </div>

          {/* Helper text */}
          <p className="text-[11px] text-gray-400">
            If the issue persists, please refresh the page.
          </p>
        </div>
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
