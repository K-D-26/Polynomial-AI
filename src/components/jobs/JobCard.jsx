import React, { useState } from 'react';
import logoImg from "../../assets/images/logo.png"
import { deleteJob } from '../../api/deleteJob';
import JobFormPopup from '../JobFormPopup';

const JobCard = ({ job, handleRefresh }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setShowPopup(prevState => !prevState);
    };

    const deleteData = async () => {
        try {
            const mssg = await deleteJob(job.id);
            console.log(mssg);
            if (mssg.success){
                handleRefresh();
            }
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };
    const handleDelete = () => {
        deleteData();
        // console.log("delete");
        handleRefresh();
    }

    return (
        <>
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex w-[650px] mb-4 relative border border-[#E6E6E6]">
                <div className="mr-3">
                    <div className="company-logo-img">
                        <img className="w-12 h-12 object-cover rounded" src={logoImg} alt="logo" />
                    </div>
                </div>
                <div>
                    <div className="job-title text-xl font-semibold">{job.jobTitle}</div>
                    <div className="company-name text-[#212121] font-semibold">{job.companyName} - {job.industry}</div>
                    <div className="company-name text-[#7A7A7A] mb-5">{job.location} ({job.remoteType})</div>
                    <div className="job-description mb-5">
                        <div className="job-time mb-2">Part-Time (9.00am - 5.00pm IST)</div>
                        <div className="job-exp mb-2">Experience ({job.minExp} - {job.maxExp} years)</div>
                        <div className="job-salary mb-2">INR (₹) {job.minSal} - {job.maxSal} / Month</div>
                        <div className="job-emp mb-2">{job.totalEmployees} employees</div>
                    </div>
                    <div className="btn-container">
                        {job.applyType === "quickApply" && <button className="apply bg-[#1597E4] text-[#FFFFFF] px-4 py-2 rounded mr-2">Apply Now</button>}
                        {job.applyType === "externalApply" && <button className="save bg-[#FFFFFF] text-[#1597E4] border border-[#1597E4] px-4 py-2 rounded">External Apply</button>}
                    </div>
                    <div className="flex absolute top-0 right-0 mt-2 mr-2 gap-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={handleUpdate}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={handleDelete}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
            
            {showPopup && <JobFormPopup job={job} onClose={() => { setShowPopup(false); }} />}
        </>
    );
};

export default JobCard;