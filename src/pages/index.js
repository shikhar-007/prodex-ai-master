import AuthLayout from "@/layouts/AuthLayout";
import { useKeywordInfoQuery } from "@/services/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export default function Home() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { data } = useKeywordInfoQuery();

  console.log(data, "data of api");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      terms: data.terms,
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
              Join Olympus AI
            </h1>
            <h2 className="text-lg italic font-[500]">
              Step into the World of Crypto Intelligence
            </h2>
            <p className="text-sm mlg:text-base text-white/60 ">
              Create your free account and unlock exclusive access to AI-powered
              crypto insights, analysis tools, and personalized recommendations.
              Olympus AI is your partner in understanding the complex world of
              cryptocurrency.
            </p>
          </div>
        </div>
        <div className="w-full mdl:w-1/2 py-8 md:py-20">
          <div className="text-white w-full text-center space-y-2">
            <h1 className="font-[700] text-[24px] sm:text-[32px] font-parsi">
              Sign Up to Begin Your Journey
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
                <label className="text-sm text-white/60">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                    maxLength: {
                      value: 30,
                      message: "Full Name cannot exceed 30 characters",
                    },
                    pattern: {
                      value: /^[A-Z][a-zA-Z ]*$/,
                      message:
                        "Full Name must start with a capital letter and contain only alphabets",
                    },
                  })}
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

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
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                      message:
                        "Password must contain at least one alphabet, one number and one special character",
                    },
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

              <div className="flex flex-col text-white space-y-2 relative">
                <label className="text-sm text-white/60">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-8 right-3 cursor-pointer text-white/60"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

              <div className="flex gap-2 px-1">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="bg-transparent border border-white/60"
                />
                <p className="text-sm text-white">
                  I’ve read & agreed with{" "}
                  <span className="text-[#25B1F2] cursor-pointer">
                    OLYMPUS AI
                  </span>
                </p>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs px-1">
                  {errors.terms.message}
                </p>
              )}

              <div className="py-10 text-center space-y-2">
                <button
                  type="submit"
                  className="w-full py-2 text-white/70 bg-buttonBg rounded-md font-parsi"
                >
                  Sign Up
                </button>
                <p className="text-sm text-white/70">
                  Already have an account?{" "}
                  <span
                    className="text-[#25B1F2] cursor-pointer"
                    onClick={() => router.push("/login")}
                  >
                    Log in
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
