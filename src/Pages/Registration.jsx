import React from 'react';
import Lottie from 'lottie-react';
import registerAnim from '../assets/Lottie_data/Animation - 1751224646481.json'; // Adjust path if needed

const Registration = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


                {/* Registration Form */}
                <div className="order-1 md:order-2 bg-gradient-to-br from-purple-100 to-blue-50 p-10 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Create an Account</h1>
                    <p className="text-gray-600 mb-6">
                        Register to find your dream job and manage applications easily.
                    </p>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="input w-full border border-gray-300 rounded-md px-3 py-2"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="input w-full border border-gray-300 rounded-md px-3 py-2"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="input w-full border border-gray-300 rounded-md px-3 py-2"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn w-full bg-violet-600 text-white hover:bg-violet-700 py-2 rounded-md"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600 text-center">
                        Already have an account?
                        <a href="/login" className="text-violet-600 font-semibold hover:underline ml-1">
                            Login
                        </a>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="order-0 md:order-1 w-full h-full">
                    <Lottie animationData={registerAnim} loop={true} />
                </div>

            </section>
        </div>
    );
};

export default Registration;
