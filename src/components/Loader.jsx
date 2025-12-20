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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-2xl bg-white shadow-xl border border-gray-100">
          {/* Spinner with soft glow */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/20" />
            <Loader2 className="relative w-12 h-12 animate-spin text-blue-600" />
          </div>

          {/* Title */}
          <p className="text-sm font-medium text-gray-700 tracking-wide">
            Please wait...
          </p>
        </div>
      </div>
  );
};

export default Loader;
