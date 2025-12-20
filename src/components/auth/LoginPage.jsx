import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/Validation/loginSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../APP/Slices/authSlice";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Title from "../Title";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, isAuthenticated } = useSelector(({ auth }) => auth);
  const redirectPath = location.state?.from || "/";

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const response = await dispatch(
      loginUser({
        identifier: data.identifier,
        password: data.password,
      })
    );

    if (loginUser.fulfilled.match(response)) {
      reset();
      navigate(redirectPath, { replace: true });
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-24">
      {/* Page Title */}
      <div className="text-center mb-14">
        <Title
          align="center"
          title="Welcome Back"
          subTitle="Login to manage your bookings and explore premium stays."
        />
      </div>

      {/* Login Card */}
      <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Username or Email */}
          <Input
            label="Username or Email"
            placeholder="Enter your username or email"
            name="identifier"
            register={register}
            error={errors.identifier?.message}
            className="text-[1rem] font-medium text-gray-950"
          />

          {/* Password */}
          <div className="relative">
            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              type={showPass ? "text" : "password"}
              register={register}
              error={errors.password?.message}
              className="pr-10 text-[1rem] font-medium text-gray-950"
              wrapperClass="mb-0"
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-12 text-gray-500 hover:text-gray-700 cursor-pointer"
              tabIndex={-1}
            >
              {showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Login Button */}
          <Button type="submit" isLoading={loading} loadingText="Logging in...">
            Login
          </Button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-gray-600 text-center text-sm">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
