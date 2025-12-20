import React, { useEffect, useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOwnerRooms,
  toggleRoomAvailability,
} from "../../APP/Slices/roomSlice";

const ListRoom = () => {
  const [rooms, setRooms] = useState([]);

  const dispatch = useDispatch();
  const { userData, isAuthenticated } = useSelector((state) => state?.auth);
  const { loading } = useSelector((state) => state.room);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchOwnerRooms())
        .unwrap()
        .then((res) => {
          //console.log("res", res);
          setRooms(res || []);
        });
    }
  }, [isAuthenticated, userData]);

  const toggleAvailability = async (roomId) => {
    await dispatch(toggleRoomAvailability(roomId))
      .unwrap()
      .then((updatedRoom) => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room?._id === updatedRoom?._id ? updatedRoom : room
          )
        );
      });
  };

  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="py-3 px-4 border-t">
        <div className="h-4 bg-gray-300 rounded w-24"></div>
      </td>
      <td className="py-3 px-4 border-t max-sm:hidden">
        <div className="h-4 bg-gray-300 rounded w-40"></div>
      </td>
      <td className="py-3 px-4 border-t">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </td>
      <td className="py-3 px-4 border-t text-center">
        <div className="h-6 bg-gray-300 rounded-full w-12 mx-auto"></div>
      </td>
    </tr>
  );

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="text-gray-500 mt-8">All Rooms</p>
      <div className="w-full max-w-3xl text-left border border-gray-300 eounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium ">
                Price / night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* 🔄 Loading Skeleton */}
            {loading &&
              Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}

            {/* 📭 Empty State */}
            {!loading && rooms.length === 0 && (
              <tr>
                <td colSpan="4" className="py-10 text-center text-gray-500">
                  No rooms found. Add your first room 🏨
                </td>
              </tr>
            )}

            {!loading &&
              rooms.map((room, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-r-gray-300">
                    {room.roomType}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-r-gray-300 max-sm:hidden">
                    {room.amenities.join(", ")}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-r-gray-300">
                    {import.meta.env.VITE_CURRENCY} {room.pricePerNight}
                  </td>

                  <td className="py-3 px-4 text-sm text-red-500 border-t border-r-gray-300 text-center">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={room.isAvailable}
                        onChange={() => toggleAvailability(room?._id)}
                      />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
