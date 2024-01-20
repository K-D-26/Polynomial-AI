import React, { useEffect, useState } from 'react';
import JobFormPopup from './JobFormPopup';
import { getJobs } from '../api/getJobs';
import Jobs from './jobs/Jobs';

const CreateJobButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [jobs, setJobs] = useState([]);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const fetchData = async () => {
        try {
            const jobsData = await getJobs();
            setJobs(jobsData);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleJobDeleted = async () => {
        // Handle the job deletion logic here
        // You might want to refetch the jobs or update the state accordingly
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="absolute top-4 left-4">
                <button onClick={handleButtonClick} className="bg-[#1597E4] text-[#FAFAFA] p-2 rounded-md text-lg mb-4">
                    Create Job
                </button>
                {showPopup && <JobFormPopup onClose={() => { setShowPopup(false); handleJobDeleted(); }} />}

                <div className='bg-[#E6E6E6] px-16 py-6'>
                    <Jobs jobs={jobs} handleJobDeleted={handleJobDeleted} />
                </div>
            </div>
        </>
    );
};

export default CreateJobButton;