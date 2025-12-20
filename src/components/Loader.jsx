import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const { nextUrl } = useParams();

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 8000);
    }
  }, [nextUrl]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-[#f6f7f9] to-white px-4">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-md gap-8 py-12 min-h-[60vh]">
        <div className="relative flex-shrink-0 mb-6">
          <div className="absolute -inset-2 rounded-full blur-xl bg-sky-400/20 animate-pulse" />
          <Loader className="relative w-10 h-10 sm:w-12 sm:h-12 animate-spin text-sky-600 flex-shrink-0" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight px-4">
          Restoring your session...
        </h1>
        <div className="w-24 h-[3px] bg-gradient-to-r from-sky-500 to-pink-500 rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default Loader;
