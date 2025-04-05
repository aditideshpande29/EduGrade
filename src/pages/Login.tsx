import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex min-h-screen flex-col bg-pastel-sky/10">
      <div className="mx-auto flex w-full flex-col justify-center px-4 sm:px-6 md:w-[540px] lg:px-8">
        <div className="py-12">
          <div className="flex justify-center">
            <Link to="/" className="flex items-center text-2xl font-bold text-pastel-lilac">
              <span className="mr-2 text-3xl">📚</span>
              EduGrade AI
            </Link>
          </div>
          
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold">Sign in to your account</h1>
              <p className="mt-2 text-slate-600">
                Welcome back! Please enter your details.
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="input pl-10"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <a href="#" className="text-sm font-medium text-pastel-lilac hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="input pl-10 pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-pastel-lilac focus:ring-pastel-lavender"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                  Remember me
                </label>
              </div>
              
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Sign in
                </button>
              </Link>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-slate-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-pastel-lilac hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-pastel-sky/10 px-2 text-sm text-slate-500">
            Powered by EduGrade AI
          </span>
        </div>
      </div>
      
      <div className="mb-8 mt-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <Link to="#" className="text-sm text-slate-500 hover:text-slate-700">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-slate-500 hover:text-slate-700">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-slate-500 hover:text-slate-700">
                Contact Us
              </Link>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} EduGrade AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
 