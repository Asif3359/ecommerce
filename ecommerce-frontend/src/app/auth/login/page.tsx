import { LoginButton } from "@/components/LoginButton";
import Link from "next/link";
import { FiMail, FiLock, FiUserPlus, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-base-content/70">Sign in to your account to continue</p>
        </div>

        <div className="space-y-6">
          
          <div className="flex flex-row justify-center items-center gap-2">
            <LoginButton provider="google" icon={<FcGoogle className="w-5 h-5" />}/>
            <LoginButton provider="facebook" icon={<FaFacebook className="w-5 h-5" />}/>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-content/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-base-100 text-base-content/60">Or continue with email</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="form-control relative">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FiMail className="w-4 h-4" />
                  Email
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  <FiMail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="form-control relative">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FiLock className="w-4 h-4" />
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  <FiLock className="w-5 h-5" />
                </div>
              </div>
              <label className="label mt-2">
                <Link href="/auth/forgot-password" className="label-text-alt link link-hover flex items-center gap-1">
                  Forgot password? <FiArrowRight className="w-3 h-3" />
                </Link>
              </label>
            </div>

            <button className="btn btn-primary w-full mt-4 group">
              Sign In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-base-content/10">
            <p className="text-base-content/70 flex items-center justify-center gap-1">
              Don&apos;t have an account?
              <Link href="/auth/signup" className="text-primary hover:underline flex items-center gap-1">
                Sign up <FiUserPlus className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}