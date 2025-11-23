import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <div
            className="mx-auto rounded-3xl bg-black/30 border border-white/10 p-8 shadow-xl space-y-8"
            style={{ width: "100%", maxWidth: "420px" }} >
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Create Account
            </span>
                    </h1>
                    <p className="text-sm text-gray-400">Join us to get started</p>
                </div>

                {/* Form */}
                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // handle submit here
                    }}
                >
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-full border border-transparent bg-white/90 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-full border border-transparent bg-white/90 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Create a password"
                            className="w-full rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Confirm your password"
                            className="w-full rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    {/* Sign up button */}
                    <button
                        type="submit"
                        className="mt-2 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-transform hover:translate-y-[1px]"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Log in link */}
                <div className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-pink-400 hover:text-pink-300"
                    >
                        Sign in
                    </Link>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="h-px flex-1 bg-white/10" />
                    <span>OR</span>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Back button */}
                <button
                    type="button"
                    className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                    <span className="text-lg">←</span>
                    <span>Back to other options</span>
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
