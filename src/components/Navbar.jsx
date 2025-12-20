import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { FiBook } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setShowHotelReg } from "../APP/Slices/uiSlice";
import { logoutUser } from "../APP/Slices/authSlice";


const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About", path: "/about" },
  ];

  const dispatch = useDispatch();
  const {userData, isAuthenticated} = useSelector((state) => state?.auth);
  // const {} = useSelector((state) => state?.user);
  const user = userData;

  //console.log(" userData", userData);

  const isOwner = userData?.role === "hotelOwner";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenHotelReg = () => {
    dispatch(setShowHotelReg(true));
  };

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
    <nav
      className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
        {isAuthenticated && (
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
            onClick={() =>
              isOwner ? navigate("/owner") : handleOpenHotelReg()
            }
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}
      </div>

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

      {/* Mobile Menu Button */}

      <div className="flex items-center gap-3 md:hidden">
        {isAuthenticated && (
          <img
            src={user.image || assets.defaultAvatar}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
            onClick={() => navigate("/my-bookings")}
          />
        )}
        <img
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {isAuthenticated && (
          <button
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
            onClick={() =>
              isOwner ? navigate("/owner") : handleOpenHotelReg()
            }
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}

        {!isAuthenticated && (
          <button
            className="bg-black text-white px-8 py-2.5 cursor-pointer rounded-full transition-all duration-500"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
