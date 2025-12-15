import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../APP/Slices/roomSlice";

const RecommendedHotels = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector((state) => state.room);
  const searchCities = useSelector(
    (state) => state.user.userData.recentlySearchedCities
  );
  // console.log("search cities", searchCities);

  const [recommended, setRecommended] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(fetchRooms());
  // }, [dispatch]);

  const filterHotels = () => {
    if (!rooms.length || !searchCities.length) {
      setRecommended([]);
      return;
    }

    const normalizedSearchCities = searchCities.map((city) =>
      city.toLowerCase()
    );

    const filteredHotels = rooms.filter((room) =>
      normalizedSearchCities.includes(room.hotel.city.toLowerCase())
    );

    setRecommended(filteredHotels);
  };

  useEffect(() => {
    filterHotels();
  }, [rooms, searchCities]);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    recommended.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <Title
          title="Recommended Hotels"
          subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        />

        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {recommended.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default RecommendedHotels;
