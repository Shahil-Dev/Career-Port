import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spiner'; // Custom loading spinner
import Build from '../Components/Build';   // Animated title component
import AllJobsData from './AllJobsData';

const AllJobs = () => {
    // State to hold job data
    const [jobs, setJobs] = useState([]);

    // State to manage loading UI while fetching data
    const [loading, setLoading] = useState(true);

    // Runs once on component mount to fetch job data
    useEffect(() => {
        fetchJobs();
    }, []);

    // Optional callback after animation completes
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    // Async function to fetch job postings from the backend API
    const fetchJobs = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
            const data = await response.json();
            setJobs(data); // Save jobs to state
        } catch (error) {
            console.error('Error fetching jobs:', error.message);
        } finally {
            setLoading(false); // Stop spinner once fetch completes
        }
    };
   console.log('Fetched jobs:', jobs); 
   
    return (
        <div className="bg-white/30 min-h-screen max-w-6xl mx-auto backdrop-blur-md shadow-xl rounded-2xl p-10 border border-white/40">
            {/* Header Section */}
            <div className="text-center mb-10">
                <Build
                    text="All Job Postings"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="lg:pt-7 petrona text-[20px] md:text-5xl text-center flex justify-center"
                />
                <p className="text-lg text-gray-700 mt-3">
                    Explore the latest job opportunities below.
                </p>
            </div>

            {/* Loading spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spinner />
                </div>
            ) : (
                // Grid of job cards
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.length > 0 ? (
                        jobs.map((job) => <AllJobsData key={job._id} job={job} />)
                    ) : (
                        // Message shown if no jobs are returned
                        <p className="text-center text-gray-500 col-span-full">
                            No jobs found.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllJobs;
