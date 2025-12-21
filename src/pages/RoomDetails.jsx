import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../APP/Slices/roomSlice";
import toast from "react-hot-toast";
import {
  checkRoomAvailability,
  createBooking,
  resetAvailability,
} from "../APP/Slices/bookingSlice";
import RoomDetailsSkeleton from "../components/ui/RoomDetailsSkeleton";

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { rooms, loading: roomsLoading } = useSelector((state) => state.room);
  const { loading: bookingLoading } = useSelector((state) => state.booking);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  // Check if the room isavailable
  const checkAvailability = async () => {
    //  Basic validation
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    // Check is checkInDate is greather than checkOutDate
    if (checkInDate >= checkOutDate) {
      toast.error("Check-In Date should be less than Check-Out Date.");
      return;
    }

    try {
      const result = await dispatch(
        checkRoomAvailability({
          room: id,
          checkInDate,
          checkOutDate,
        })
      ).unwrap();
      if (result?.available) {
        setIsAvailable(true);
        toast.success("Room is available 🎉");
      } else {
        setIsAvailable(false);
        toast.error("Room is not available.");
      }
    } catch (err) {
      setIsAvailable(false);
      toast.error(err || "Availability check failed");
    }
  };

  // OnsubmitHandler to check the room availability and book the room
  const OnsubmitHandler = async (e) => {
    e.preventDefault();

    if (!isAvailable) {
      return checkAvailability();
    }

    // 🔐 AUTH GUARD
    if (!isAuthenticated) {
      toast.error("Please login to continue booking");

      navigate("/login", {
        state: {
          from: location.pathname,
        },
        replace: true,
      });

      return;
    }

    try {
      await dispatch(
        createBooking({
          room: id,
          checkInDate,
          checkOutDate,
          guests,
          paymentMethod: "Pay At Hotel",
        })
      ).unwrap();

      toast.success("Booking confirmed 🎉");
      navigate("/my-bookings");
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error(error?.message || "Booking failed");
    }
  };

 // console.log("room", room);

  // Fetch rooms if not present (on refresh)
  useEffect(() => {
    if (!rooms.length) {
      dispatch(fetchRooms());
    }
  }, [dispatch, rooms.length]);

  // Find room after rooms load
  useEffect(() => {
    if (rooms.length) {
      const room = rooms.find((room) => room._id === id);
      room && setRoom(room);
      room && setMainImage(room.images[0]);
    }
  }, [rooms]);

  useEffect(() => {
    setIsAvailable(false);
    dispatch(resetAvailability());
  }, [checkInDate, checkOutDate]);

  if (roomsLoading || !room) {
    return <RoomDetailsSkeleton />;
  }

  
  

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/*Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="room- image"
                  onClick={() => setMainImage(img)}
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === img && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlight */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight} /night</p>
        </div>

        {/* CheckIn CheckOut Form */}
        <form
          onSubmit={OnsubmitHandler}
          className="flex flex-col md:flex-row items-start justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.05)] p-6 rounded-xl mx-auto mt-16 max-w-6xl"
        >
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            {/*check in div*/}
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            {/*check Out div*/}
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate}
                disabled={!checkInDate}
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
            {/*Guests*/}
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                min={0}
                max={20}
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="1"
                className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={bookingLoading}
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            {bookingLoading
              ? "Checking..."
              : isAvailable
              ? "Book Now"
              : "Check Availability"}
          </button>
        </form>

        {/*Common Specifications */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* description */}
        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Experience true city living in our comfortable two-bedroom
            apartment! Guests will be allocated a ground-floor unit based on
            availability. The spacious apartment offers an authentic city vibe,
            perfect for both short and long stays. The quoted price covers two
            guests. If you are booking for a group, please select the correct
            number of guests at checkout to receive an accurate price. We look
            forward to welcoming you for a relaxing and memorable stay!
          </p>
        </div>

        {/*Host by - Owner details */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
              <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/contact-us")}
            className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
