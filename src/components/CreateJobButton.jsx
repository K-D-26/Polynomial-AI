import React, { useEffect, useState } from 'react';
import JobFormPopup from './JobFormPopup';

const CreateJobButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    return (
        <>
            <div className='ml-2 my-1'>
                <button onClick={handleButtonClick} className="bg-[#1597E4] text-[#FAFAFA] p-2 rounded-md text-lg mb-4">
                    Create Job
                </button>
                {showPopup && <JobFormPopup jobId={0} onClose={() => { setShowPopup(false); }} />}
            </div>
        </>
    );
};

export default CreateJobButton;