import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../src/assets/Lottie_data/Page Not Found 404.json";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const Error = () => {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-4">
            {/* Back Button */}
            <div className="w-full max-w-6xl">
                <Link to="/" className="inline-block mb-6">
                    <button
                        type="button"
                        className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg transition duration-300"
                    >
                        <FaArrowLeft className="text-lg" />
                        Go back
                    </button>
                </Link>
            </div>

            {/* Lottie Animation */}
            <div className="w-full max-w-xl mx-auto">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>

            {/* Text below animation */}
            <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-gray-700">Oops! Page not found.</h1>
                <p className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
            </div>
        </div>
    );
};

export default Error;
