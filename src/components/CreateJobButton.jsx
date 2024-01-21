import React, { useEffect, useState } from 'react';
import JobFormPopup from './JobFormPopup';

const CreateJobButton = ({ handleRefresh }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const job = null;

    return (
        <>
            <div className='ml-2 my-1'>
                <button onClick={handleButtonClick} className="bg-[#1597E4] text-[#FAFAFA] p-2 rounded-md text-lg mb-4">
                    Create Job
                </button>
                {showPopup && <JobFormPopup job={job} onClose={() => { setShowPopup(false); }} handleRefresh={handleRefresh} />}
            </div>
        </>
    );
};

export default CreateJobButton;