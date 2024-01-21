import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import { createJob } from '../../api/createJob';

const Form = ({ job, onClose }) => {
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

    const handleClick2 = (e) => {
        e.preventDefault();
        const data = createJob(formData);
        console.log()
        if (data.success) {
            onClose();
            alert("Job Created successfully.")
        }
        else {
            alert('Oops! Something went wrong.')
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