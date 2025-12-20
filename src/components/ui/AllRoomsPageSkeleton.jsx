import React from 'react'

const AllRoomsPageSkeleton = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 animate-pulse">
      
      {/* LEFT CONTENT */}
      <div className="flex-1">
        {/* Heading */}
        <div className="mb-10">
          <div className="h-10 w-60 bg-gray-200 rounded"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mt-4"></div>
        </div>

        {/* Room Cards */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300"
          >
            <div className="h-64 md:w-1/2 w-full bg-gray-200 rounded-xl"></div>

            <div className="md:w-1/2 w-full space-y-3">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-72 bg-gray-200 rounded"></div>
              <div className="h-4 w-40 bg-gray-200 rounded"></div>

              <div className="flex gap-2 mt-3">
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
              </div>

              <div className="h-6 w-32 bg-gray-200 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT FILTERS */}
      <div className="bg-white w-80 border border-gray-300 max-lg:mb-8 min-lg:mt-16 p-5 space-y-4">
        <div className="h-5 w-24 bg-gray-200 rounded"></div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
};


export default AllRoomsPageSkeleton