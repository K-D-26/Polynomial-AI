import React, { useEffect, useState } from 'react';
import Jobs from '../components/jobs/Jobs';
import CreateJobButton from '../components/CreateJobButton';
import { getJobs } from '../api/getJobs';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [fetching, setFetching] = useState(false);

    const fetchData = async () => {
        try {
            setFetching(true);
            const jobsData = await getJobs();
            setJobs(jobsData);
            // console.log(jobsData);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        if (!fetching) {
            console.log('up')
            fetchData();
            console.log('down')
        }
    };

    return (
        <>
            <div className="absolute top-4 left-4">
                <CreateJobButton handleRefresh={handleRefresh} />
                
                <div className='bg-[#E6E6E6] px-10 py-6 mx-2'>
                    {fetching ? (
                        <p className="text-xl font-normal text-gray-700">Loading...</p>
                    ) : (
                        <Jobs 
                            jobs={jobs} 
                            handleRefresh={handleRefresh} 
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;