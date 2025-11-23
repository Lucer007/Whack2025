import React from "react";

const LoginPage = () => {
    return (
        <div
            className="min-h-screen w-full flex items-center justify-center px-4"
            style={{
                // full-screen background
                background:
                    "radial-gradient(circle at top, #2a184a 0, #050016 55%, #020010 100%)",
            }}
        >
            {/* Main auth card */}
            <div
                className="w-full max-w-xl rounded-[32px] px-8 md:px-10 py-10 md:py-12 text-center text-white relative"
                style={{
                    background:
                        "radial-gradient(circle at top, rgba(168, 85, 247, 0.25), transparent 55%), rgba(5, 0, 22, 0.95)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
                }}
            >
                {/* Heading */}
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span
                style={{
                    backgroundImage: "linear-gradient(90deg,#fb7185,#f97316)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
              Welcome to
            </span>
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-none">
            <span
                style={{
                    backgroundImage: "linear-gradient(90deg,#ec4899,#a855f7)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
              NUDGE
            </span>
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300">
                        Choose how you&apos;d like to continue
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 space-y-4">
                    {/* Google */}
                    <button
                        type="button"
                        className="w-full rounded-full px-6 py-4 text-sm md:text-lg font-semibold flex items-center justify-center gap-2"
                        style={{
                            background:
                                "linear-gradient(90deg,#fb7185,#ec4899,#a855f7)",
                            boxShadow: "0 18px 40px rgba(236,72,153,0.45)",
                            border: "none",
                        }}
                    >
                        <span className="text-xl">✨</span>
                        <span>Continue with Google</span>
                    </button>

                    {/* Apple */}
                    <button
                        type="button"
                        className="w-full rounded-full px-6 py-4 text-sm md:text-lg font-semibold flex items-center justify-center"
                        style={{
                            backgroundColor: "#050816",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow: "0 14px 32px rgba(0,0,0,0.8)",
                        }}
                    >
                        Continue with Apple
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.18em] mt-2">
                        <div className="flex-1 h-px bg-white/10" />
                        <span>OR</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Email */}
                    <button
                        type="button"
                        className="w-full rounded-full px-6 py-4 text-sm md:text-lg font-semibold flex items-center justify-center gap-2"
                        style={{
                            backgroundColor: "#8b5cf6",
                            boxShadow: "0 18px 36px rgba(139,92,246,0.5)",
                            border: "none",
                        }}
                    >
                        <span className="text-xl">📧</span>
                        <span>Continue with email</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;








