import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobsData from '../Pages/AllJobsData';

const TabCategories = () => {


    // State to hold job data
    const [jobs, setJobs] = useState([]);

    // State to manage loading UI while fetching data
    const [loading, setLoading] = useState(true);

    // Runs once on component mount to fetch job data
    useEffect(() => {
        fetchJobs();
    }, []);


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





    return (
        <Tabs>
            <div className="container px-4 py-16 mx-auto max-w-6xl">


                <div className="mt-8 flex justify-center">
                    <TabList className="flex flex-wrap justify-center gap-4">
                        <Tab className="px-6 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-100 hover:text-green-700 react-tabs__tab"
                            selectedClassName="bg-green-500 text-white border-green-500">
                            All Jobs
                        </Tab>
                        <Tab className="px-6 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-100 hover:text-green-700 react-tabs__tab"
                            selectedClassName="bg-green-500 text-white border-green-500">
                            Web Development
                        </Tab>
                        <Tab className="px-6 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-100 hover:text-green-700 react-tabs__tab"
                            selectedClassName="bg-green-500 text-white border-green-500">
                            Graphics Design
                        </Tab>
                        <Tab className="px-6 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-100 hover:text-green-700 react-tabs__tab"
                            selectedClassName="bg-green-500 text-white border-green-500">
                            Digital Marketing
                        </Tab>
                    </TabList>
                </div>

                {/* Panels */}
                <div className="mt-10">
                    <TabPanel>
                      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                          {
                            jobs.map((job) => <AllJobsData key={job._id} job={job} />)

                        }
                      </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Replace these with <JobCard /> components */}
                        {
                            jobs.filter(job => job.category === 'Web Development').map((job) => <AllJobsData key={job._id} job={job} />)
                        }


                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                jobs.filter(job => job.category === 'Graphic Design').map((job) => <AllJobsData key={job._id} job={job} />)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                     {
                            jobs.filter(job => job.category === 'Digital Marketing').map((job) => <AllJobsData key={job._id} job={job} />)
                        }
                        </div>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    );
};

export default TabCategories;
