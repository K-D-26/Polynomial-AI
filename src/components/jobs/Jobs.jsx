import React from 'react';
import JobCard from './JobCard';

const Jobs = ({ jobs, handleJobDeleted }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {jobs.map((job, index) => (
        <div key={index} className="w-1/2 px-4 mb-4">
          <JobCard job={job} handleJobDeleted={handleJobDeleted} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
