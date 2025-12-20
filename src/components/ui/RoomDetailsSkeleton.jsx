import React from "react";

const RoomDetailsSkeleton = () => {
  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 animate-pulse">
      {/* Title */}
      <div className="h-10 w-2/3 bg-gray-300 rounded"></div>
      <div className="h-4 w-32 bg-gray-300 rounded mt-3"></div>

      {/* Rating */}
      <div className="flex gap-2 mt-4">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </div>

      {/* Address */}
      <div className="h-4 w-1/2 bg-gray-300 rounded mt-3"></div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full h-80 bg-gray-300 rounded-xl"></div>

        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-10 space-y-3">
        <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Booking Card */}
      <div className="mt-16 max-w-6xl h-28 bg-gray-300 rounded-xl"></div>

      {/* Description */}
      <div className="mt-16 space-y-3 max-w-3xl">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-4 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Host */}
      <div className="mt-14 flex items-center gap-4">
        <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
          <div className="h-4 w-28 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsSkeleton;
