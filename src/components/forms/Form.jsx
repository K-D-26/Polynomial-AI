import React, { useEffect, useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import { createJob } from '../../api/createJob';
import { updateJob } from '../../api/updateJob';

const Form = ({ job, onClose, handleRefresh }) => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: '',
        minExp: '',
        maxExp: '',
        minSal: '',
        maxSal: '',
        totalEmployees: '',
        applyType: '',
    });

    useEffect(() => {
        if (job !== null) {
            setFormData({
                jobTitle: job.jobTitle,
                companyName: job.companyName,
                industry: job.industry,
                location: job.location,
                remoteType: job.remoteType,
                minExp: job.minExp,
                maxExp: job.maxExp,
                minSal: job.minSal,
                maxSal: job.maxSal,
                totalEmployees: job.totalEmployees,
                applyType: job.applyType,
            });
        }
    }, []);

    // console.log(formData);

    const handleClick1 = (e) => {
        e.preventDefault();
        const requiredFields = ['jobTitle', 'companyName', 'industry'];
        const hasEmptyField = requiredFields.some(field => !formData[field]);

        // validating the mandatory inputs in Form1
        if (hasEmptyField) {
            alert('Please fill in all the required fields.');
        }
        else {
            setPage(1);
        }
    }

    const createJobs = async () => {
        try {
            const data = await createJob(formData);
            console.log(data);
            if(data.success){
                onClose();
                handleRefresh();
            }
        } catch (error) {
            alert('Oops! Something went wrong.')
            console.error('Error creating job:', error);
        }
    };

    const updateJobs = async () => {
        try {
            const data = await updateJob(job.id, formData);
            console.log(data);
            if (data.success){
                onClose();
                handleRefresh();
                console.log(handleRefresh)
            }
        } catch (error) {
            alert('Oops! Something went wrong.')
            console.error('Error updating job:', error);
        }
    };

    const handleClick2 = (e) => {
        e.preventDefault();
        if (job === null) {
            createJobs();
        }
        else {
            updateJobs();
        }
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        setPage(0);
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <Form1 formData={formData} setFormData={setFormData} onClick={handleClick1} />
        }
        else {
            return <Form2 formData={formData} setFormData={setFormData} onClick={handleClick2} onBackClick={handleBackClick} />
        }
    };

    return (
        <div className="form-container">
            {PageDisplay()}
        </div>
    )
}

export default Form