import React, { useEffect } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelBookings } from "../../APP/Slices/bookingSlice";

const StatSkeleton = () => (
  <div className="bg-gray-100 border border-gray-200 rounded flex p-4 pr-8 animate-pulse">
    <div className="h-10 w-10 bg-gray-300 rounded max-sm:hidden" />
    <div className="ml-4 space-y-2">
      <div className="h-4 w-32 bg-gray-300 rounded" />
      <div className="h-4 w-20 bg-gray-300 rounded" />
    </div>
  </div>
);

const TableSkeleton = () => (
  <tr>
    <td colSpan="4" className="py-6 text-center text-gray-400 animate-pulse">
      Loading bookings...
    </td>
  </tr>
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const { hotelBookings, totalBookings, totalRevenue, loading } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchHotelBookings());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className="pb-8">
      <Title
        align="left"
        title="Dashboard"
        font="outfit"
        subTitle="Monitor your room listings, track bookings and analyze revenue — all in one place."
      />

      <div className="flex gap-4 my-8 flex-wrap">
        {loading ? (
          <>
            <StatSkeleton />
            <StatSkeleton />
          </>
        ) : (
          <>
            {/* Total Bookings */}
            <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
              <img
                src={assets.totalBookingIcon}
                alt="booking-icon"
                className="max-sm:hidden h-10"
              />
              <div className="flex flex-col sm:ml-4 font-medium">
                <p className="text-blue-500 text-lg">Total Bookings</p>
                <p className="text-neutral-400 text-base">{totalBookings}</p>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
              <img
                src={assets.totalRevenueIcon}
                alt="revenue-icon"
                className="max-sm:hidden h-10"
              />
              <div className="flex flex-col sm:ml-4 font-medium">
                <p className="text-blue-500 text-lg">Total Revenue</p>
                <p className="text-neutral-400 text-base">
                  {import.meta.env.VITE_CURRENCY} {totalRevenue}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {loading ? (
              <TableSkeleton />
            ) : hotelBookings.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-400">
                  No bookings found
                </td>
              </tr>
            ) : (
              hotelBookings.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {item.user?.username || "N/A"}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                    {item.room?.roomType || "N/A"}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                    {import.meta.env.VITE_CURRENCY} {item.totalPrice}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    <button
                      className={`py-1 px-3 text-xs rounded-full mx-auto block ${
                        item.isPaid
                          ? "bg-green-200 text-green-600"
                          : "bg-amber-200 text-yellow-600"
                      }`}
                    >
                      {item.isPaid ? "Completed" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
