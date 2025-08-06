import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const jobDetails = useLoaderData();
  const {
    _id,
    title,
    company,
    location,
    salaryRange,
    jobType,
    category,
    applicationDeadline,
    company_logo,
  } = jobDetails || {};

  return (
    <div
      className="max-w-6xl min-h-screen mx-auto p-8 md:p-12 bg-white/30 backdrop-blur-md shadow-2xl rounded-3xl border border-white/20"
      data-aos="fade-up"
    >
      {/* Inner Container */}
      <div className="px-4 md:px-8 py-4">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          {/* Logo */}
          {company_logo && (
            <div
              className="w-28 h-28 bg-white/50 backdrop-blur-lg rounded-2xl p-3 border border-white/40 shadow-md"
              data-aos="zoom-in"
            >
              <img
                src={company_logo}
                alt={`${company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Info */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{company}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-indigo-200 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
                {jobType}
              </span>
              <span className="bg-green-200 text-green-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12" data-aos="fade-up">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="text-sm uppercase font-semibold text-gray-500">Location</h3>
                <p className="text-lg text-gray-800">{location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMoneyBillWave className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-sm uppercase font-semibold text-gray-500">Salary Range</h3>
                <p className="text-lg text-gray-800">
                  {salaryRange ? `${salaryRange.currency} ${salaryRange.min} - ${salaryRange.max}` : 'Not specified'}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-purple-500 text-xl mt-1" />
              <div>
                <h3 className="text-sm uppercase font-semibold text-gray-500">Job Type</h3>
                <p className="text-lg text-gray-800 capitalize">{jobType}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaCalendarAlt className="text-red-500 text-xl mt-1" />
              <div>
                <h3 className="text-sm uppercase font-semibold text-gray-500">Deadline</h3>
                <p className="text-lg text-gray-800">
                  {new Date(applicationDeadline).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 border-t border-white/20"
          data-aos="zoom-in-up"
        >
          <Link to={`/apply-jobs/${_id}`} >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
            Apply Now
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
