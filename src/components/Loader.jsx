import { Loader } from "lucide-react";
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
    <div className="flex justify-center items-center h-screen">
      <Loader className="w-12 h-12 animate-spin font-semibold text-blue-600" />
    </div>
  );
};

export default Loader;
