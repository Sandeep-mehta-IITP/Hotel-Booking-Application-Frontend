import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/Validation/signupSchema";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Title from "../Title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../APP/Slices/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    console.log("formData for signup ", formData);
    
    const result = await dispatch(registerUser(formData));

    if (registerUser.fulfilled.match(result)) {
      reset();
      navigate("/");
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-24">
      {/* Page Title */}
      <div className="text-center mb-14">
        <Title
          align="center"
          title="Create Your Account"
          subTitle="Join QuickStay to book premium stays and manage your trips effortlessly."
        />
      </div>

      {/* Signup Card */}
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="flex flex-col gap-6"
        >
          {/* Username */}
          <Input
            label="Username"
            placeholder="Enter your username"
            name="username"
            register={register}
            error={errors.username?.message}
          />

          {/* Full Name */}
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            name="fullName"
            register={register}
            error={errors.fullName?.message}
          />

          {/* Email */}
          <Input
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />

          {/* Password */}
          <div className="relative">
            <Input
              label="Password"
              placeholder="Create a password"
              name="password"
              type={showPass ? "text" : "password"}
              register={register}
              error={errors.password?.message}
              className="pr-10"
              wrapperClass="mb-0"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-12 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Input
              label="Confirm Password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              type={showConfirmPass ? "text" : "password"}
              register={register}
              error={errors.confirmPassword?.message}
              className="pr-10"
              wrapperClass="mb-0"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-12 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showConfirmPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Avatar */}
          <Input
            label="Profile Image"
            name="image"
            type="file"
            accept="image/*"
            register={register}
            error={errors.image?.message}
            className="file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700 "
          />

          {/* Signup Button */}
          <Button type="submit" isLoading={loading} loadingText="Creating...">
            Create Account
          </Button>
        </form>

        {/* Login link */}
        <p className="mt-6 text-gray-600 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
