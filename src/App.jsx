import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import SafetyInformation from "./pages/SafetyInformation";
import CancellationOptions from "./pages/CancellationOptions";
import Accessibility from "./pages/Accessibility";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import { getCurrentUser } from "./APP/Slices/authSlice";
import { healthCheck } from "./APP/Slices/healthCheckSlice";
import ScrollToTop from "./components/ui/ScrollToTop";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import OwnerRoute from "./components/auth/OwnerRoute";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const showHotelReg = useSelector((state) => state?.ui?.showHotelReg);

  const dispatch = useDispatch();

  const [initialLoading, setInitialLoading] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) {
      setInitialLoading(true);
      return;
    }
    hasInitialized.current = true;
    dispatch(healthCheck())
      .then(() => {
        return dispatch(getCurrentUser());
      })
      .then(() => {
        setInitialLoading(true);
      })
      .catch((error) => {
        console.error("App init failed:", error);
        setInitialLoading(true);
      });

    // Interval for healthCheck every 5 min
    const intervalId = setInterval(() => {
      dispatch(healthCheck()).catch(console.error);
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // If still loading, show splash (but with ref, it should be bulletproof)
  if (!initialLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-[#f6f7f9] to-white px-4">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-md gap-8 py-12 min-h-[60vh]">
          <div className="relative flex-shrink-0 mb-6">
            <div className="absolute -inset-2 rounded-full blur-xl bg-sky-400/20 animate-pulse" />
            <Loader className="relative w-10 h-10 sm:w-12 sm:h-12 animate-spin text-sky-600 flex-shrink-0" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight px-4">
            Restoring your session
          </h1>
          <div className="w-24 h-[3px] bg-gradient-to-r from-sky-500 to-pink-500 rounded-full mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <Toaster
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/safety-info" element={<SafetyInformation />} />
          <Route
            path="/cancellation-options"
            element={<CancellationOptions />}
          />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />

          {/* User Protected */}
          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          {/* Owner Protected */}
          <Route
            path="/owner"
            element={
              <OwnerRoute>
                <Layout />
              </OwnerRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
