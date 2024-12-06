import CreateNewPassword from "@/components/Modals/CreateNewPassword";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import VerifyOtpModal from "@/components/Modals/VerifyOtpModal";
import AuthLayout from "@/layouts/AuthLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log("Form Submitted", payload);
  };

  return (
    <AuthLayout>
      <div className="flex gap-5">
        <div className="w-1/2 hidden mdl:block relative">
          <img src="/images/authCardBg.png" className="h-full w-full" />
          <div className="absolute top-24 left-4 text-white w-[350px] mlg:w-[470px] space-y-2">
            <h1 className="text-[32px] font-[700] font-parsi">
              Welcome to Olympus AI
            </h1>
            <h2 className="text-lg italic font-[500]">
              Your Ultimate AI Companion for Crypto Insights
            </h2>
            <p className="text-base text-white/60">
              Unlock the power of AI-driven knowledge and stay ahead in the
              crypto world. Whether you're here to explore market trends,
              understand blockchain technology, or get real-time insights,
              Olympus AI has you covered.
            </p>
          </div>
        </div>
        <div className="w-full mdl:w-1/2 py-8 md:py-20">
          <div className="text-white w-full text-center space-y-2">
            <h1 className="font-[700] text-[24px] sm:text-[32px] font-parsi">
              Log In to Begin Your Journey
            </h1>
            <p className="text-base sm:text-lg text-white/60 font-[400]">
              Your gateway to the future of crypto awaits.
            </p>
          </div>
          <div className="w-full flex justify-center p-5 md:p-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[350px] space-y-3"
            >
              <div className="flex flex-col text-white space-y-2">
                <label className="text-sm text-white/60">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col text-white space-y-2 relative">
                <label className="text-sm text-white/60">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-8 right-3 cursor-pointer text-white/60"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              <div>
                <p
                  onClick={() => setIsDialogOpen(true)}
                  className="text-[#25B1F2] w-fit text-xs cursor-pointer"
                >
                  Forgot Password?
                </p>
              </div>

              <div className="py-10 text-center space-y-2">
                <button
                  type="submit"
                  className="w-full py-2 text-white/70 font-parsi bg-buttonBg rounded-md"
                >
                  Log In
                </button>
                <p className="text-sm text-white/70">
                  Don’t have account ?{" "}
                  <span
                    className="text-[#25B1F2] cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <VerifyOtpModal />
      <CreateNewPassword />
      <ForgotPasswordModal isOpen={isDialogOpen} onClose={setIsDialogOpen} />
    </AuthLayout>
  );
}

export default Login;
