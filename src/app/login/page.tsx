"use client";

import { useState } from "react";
import { Lock, Mail, Phone, ArrowRight, Check, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const sendOtp = async () => {
    // Mock API call to send OTP
    console.log("Sending OTP to", phone);
    setTimeout(() => setOtpSent(true), 1000);
  };

  const verifyOtp = async () => {
    // Mock API call to verify OTP
    console.log("Verifying OTP", otp);
    if (otp === "1234") {
      setOtpVerified(true);
      alert("OTP Verified Successfully");
    } else {
      alert("Invalid OTP");
    }
  };

  const { login, signup } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isSignup) {
        const success = await signup(email, password, phone);
        if (success) {
          router.push("/");
        } else {
          setError("Email already exists");
        }
      } else {
        const success = await login(email, password);
        if (success) {
          router.push("/");
        } else {
          setError("Invalid email or password");
        }
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#F9F6F2]">
        <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#1A472A] to-transparent opacity-90 z-0"></div>
        <div className="w-full max-w-md mx-auto relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-8">
            <span className="text-2xl font-bold text-white">BuildEaze</span>
          </Link>

          {/* Welcome Text */}
          <h2 className="text-3xl font-bold text-[#1A472A] mb-2">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-[#2F2F2F]/70 mb-8">
            {isSignup
              ? "Start your journey with BuildEaze"
              : "Please enter your details to sign in"}
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleAuth}>
            {isSignup && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#2F2F2F]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A472A]/50 h-5 w-5" />
                  <input
                    type="tel"
                    placeholder="+91 999 999 9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#1A472A]/20 rounded-xl focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] transition-colors bg-white"
                  />
                </div>
                
                {!otpSent ? (
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="w-full inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-xl font-medium text-[#F9F6F2] bg-[#1A472A] hover:bg-[#1A472A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A] transition-colors"
                  >
                    Send OTP
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ) : !otpVerified ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-[#1A472A]/20 rounded-xl focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] transition-colors bg-white"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="w-full inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-xl font-medium text-[#F9F6F2] bg-[#DAA520] hover:bg-[#DAA520]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DAA520] transition-colors"
                    >
                      Verify OTP
                      <Check className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center text-[#1A472A] space-x-2">
                    <Check className="h-5 w-5" />
                    <span>Phone number verified</span>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#2F2F2F]">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A472A]/50 h-5 w-5" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#1A472A]/20 rounded-xl focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] transition-colors bg-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-[#2F2F2F]">Password</label>
                {!isSignup && (
                  <button type="button" className="text-sm font-medium text-[#DAA520] hover:text-[#1A472A] transition-colors duration-200">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A472A]/50 h-5 w-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#1A472A]/20 rounded-xl focus:ring-2 focus:ring-[#1A472A] focus:border-[#1A472A] transition-colors bg-white"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || (isSignup && !otpVerified)}
              className={`w-full inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-xl text-[#F9F6F2] font-medium
                ${
                  isLoading || (isSignup && !otpVerified)
                    ? "bg-[#1A472A]/40 cursor-not-allowed"
                    : "bg-[#1A472A] hover:bg-[#1A472A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A]"
                } transition-colors`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isSignup ? "Creating Account..." : "Signing In..."}
                </>
              ) : (
                <>
                  {isSignup ? "Create Account" : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#2F2F2F]/70">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            {" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="font-medium text-[#DAA520] hover:text-[#1A472A] transition-colors duration-200"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative w-1/2">
        <div className="absolute inset-0">
          <Image
            src="/images/plotsbg1.jpg"
            alt="Modern building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A472A]/80 to-[#1A472A]/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full flex items-center justify-center text-[#F9F6F2] p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">Build Your Dream Home with BuildEaze</h2>
            <p className="text-lg text-[#F9F6F2]/90">
              Join thousands of homeowners who have successfully built their dream homes with our expert guidance and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}