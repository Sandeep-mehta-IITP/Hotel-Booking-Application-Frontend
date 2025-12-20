import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FiBook } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../APP/Slices/authSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const { userData, isAuthenticated } = useSelector((state) => state?.auth);
  // const {} = useSelector((state) => state?.user);
  const user = userData;

  // console.log(" userData", userData);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Logout Handler
  const logoutHandler = async () => {
    await dispatch(logoutUser()).then(() => navigate("/"));
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
      </Link>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <img
              src={user?.image || assets.defaultAvatar}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer object-cover"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg overflow-hidden text-sm">
                <button
                  className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/my-bookings");
                    setShowDropdown(false);
                  }}
                >
                 <FiBook className="w-4 h-4 text-gray-900 font-bold" />
                  My Bookings
                </button>

                <button
                  className="px-4 py-2 w-full text-left hover:bg-gray-100 text-red-500 cursor-pointer"
                  onClick={() => {
                    logoutHandler();
                    setShowDropdown(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
