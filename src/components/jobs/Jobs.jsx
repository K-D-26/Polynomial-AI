import React from 'react';
import JobCard from './JobCard';

const Jobs = ({ jobs, handleRefresh }) => {
  return (
    <div className="flex flex-wrap mx-4">
      {jobs.map((job, index) => (
        <div key={index} className="w-full lg:w-1/2 xl:w-1/2 px-4 mb-4">
          <JobCard job={job} handleRefresh={handleRefresh} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;