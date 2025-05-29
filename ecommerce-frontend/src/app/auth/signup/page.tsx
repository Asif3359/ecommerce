import Link from "next/link";
import { FiMail, FiLock, FiUser, FiLogIn } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LoginButton } from "@/components/LoginButton";

export default function SignupPage() {
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-base-content/70">Join our community today</p>
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
              <span className="px-3 bg-base-100 text-base-content/60">Or sign up with email</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="form-control relative">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FiUser className="w-4 h-4" />
                  Full Name
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  <FiUser className="w-5 h-5" />
                </div>
              </div>
            </div>

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
                  placeholder="Create a password"
                  className="input input-bordered w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  <FiLock className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  <FiLock className="w-4 h-4" />
                  Confirm Password
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  <FiLock className="w-5 h-5" />
                </div>
              </div>
            </div>

            <button className="btn btn-primary w-full mt-4 group">
              Create Account
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
              Already have an account?
              <Link href="/auth/login" className="text-primary hover:underline flex items-center gap-1">
                Sign in <FiLogIn className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

