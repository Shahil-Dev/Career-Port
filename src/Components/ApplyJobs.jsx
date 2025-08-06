import React, { useEffect, } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

const ApplyJobs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

 

    const handleChange = e => {
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const resumeLink = form.resumeLink.value;
       const coverLetter = form.coverLetter.value;
       const applicationData = {
           name,
           email,
           resumeLink,
           coverLetter
       };
       console.log(applicationData);
        form.reset(); 
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Normally you'd post to backend here
        Swal.fire({
            icon: 'success',
            title: 'Application Submitted!',
            text: 'Thank you for applying. We will contact you soon.',
            confirmButtonColor: '#2563eb',
        });
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br   px-4 py-10">
            <form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                className="w-full max-w-2xl bg-white/30 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20"
            >
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Apply for This Job</h2>

                {/* Name */}
                <div className="mb-6" data-aos="fade-right">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}
                <div className="mb-6" data-aos="fade-left">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Resume Link */}
                <div className="mb-6" data-aos="fade-right">
                    <label htmlFor="resumeLink" className="block text-gray-700 font-semibold mb-2">
                        Resume/CV Link
                    </label>
                    <input
                        type="url"
                        name="resumeLink"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Paste your resume link"
                    />
                </div>

                {/* Cover Letter */}
                <div className="mb-6" data-aos="fade-left">
                    <label htmlFor="coverLetter" className="block text-gray-700 font-semibold mb-2">
                        Cover Letter
                    </label>
                    <textarea
                        name="coverLetter"
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Write a short cover letter..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-8" data-aos="zoom-in">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyJobs;
