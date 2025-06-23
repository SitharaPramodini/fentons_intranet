import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen loginbg flex items-center justify-center p-4">

            <div className="bg-white p-2 rounded-3xl shadow-2xl overflow-hidden max-w-[52rem] w-full flex">
                {/* Left Side - Form */}
                <div className="w-full lg:w-1/2 px-8 py-6 lg:px-12 lg:py-10">
                    <div className="max-w-md mx-auto">
                        {/* Logo */}
                            {/* <img src="logo.webp" className="max-w-[100px] h-auto" alt="Hayleys Fentons Logo" /> */}

                        {/* Title */}
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                            Your gateway to work
                        </h2>

                        {/* Social Login Buttons */}
                        <div className="space-y-3 mb-6">

                            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-5 h-5">
                                    <svg viewBox="0 0 24 24" className="w-full h-full">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Continue with Google</span>
                            </button>


                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-gray-500 text-sm">or</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full py-3 px-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-4 rounded-xl transition-colors mt-6"
                            >
                                Login
                            </button>
                        </div>

                        {/* Login Link */}
                        {/* <p className="text-center text-gray-600 mt-6">
              Already have an account?{' '}
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Log in
              </button>
            </p> */}
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="hidden  lg:block lg:w-1/2 relative">
                    <div
                        className="w-full h-full rounded-3xl bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('login.webp')`
                        }}
                    >
                                            <img src="logo.webp" className="max-w-[200px] mx-auto pt-40 h-auto" alt="Hayleys Fentons Logo" />

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#000000a0] via-transparent to-[#00000078]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}