import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaBuilding } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import { Link } from 'react-router-dom';

const AllJobsData = ({ job }) => {
  const {
    title,
    company,
    location,
    salaryRange,
    jobType,
    category,
    applicationDeadline,
    company_logo,
    description
  } = job;

  // Format salary range
  const formattedSalary = `${salaryRange?.currency?.toUpperCase() || 'BDT'} ${salaryRange?.min?.toLocaleString() || '0'} - ${salaryRange?.max?.toLocaleString() || '0'}`;

  // Calculate days remaining for deadline
  const daysRemaining = Math.ceil((new Date(applicationDeadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="transform transition duration-300 hover:scale-[1.01]">
      <div className="rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-lg overflow-hidden h-full flex flex-col">
        {/* Company Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 flex items-center space-x-4 border-b border-blue-100">
          {company_logo ? (
            <img
              src={company_logo}
              alt={company}
              className="w-12 h-12 object-contain rounded-lg border border-gray-200 bg-white p-1"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-blue-500">
              <FaBuilding size={20} />
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-1" />
                <span>{location}</span>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {category}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-5 line-clamp-3">
            {description}
          </p>

          {/* Job Metadata */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-gray-500" />
              <span className="text-sm text-gray-700">{jobType}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-gray-500" />
              <span className="text-sm text-gray-700">{formattedSalary}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-gray-500" />
              <span className="text-sm text-gray-700">
                {daysRemaining > 0 ? `${daysRemaining} days left` : 'Expired'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer with Action Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${daysRemaining > 3 ? 'bg-green-100 text-green-800' :
                daysRemaining > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
              }`}>
              {daysRemaining > 0 ? 'Active' : 'Closed'}
            </span>
            <Link to={`/jobs/${job._id}`} >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobsData;