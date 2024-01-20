import React from 'react';
import Input from '../Input';
import Button from '../Button';

const Form1 = ({ formData, setFormData, onClick }) => {
  return (
    <div className="w-[577px] h-[564px] mx-8 mb-8 mt-4 p-6 bg-white rounded shadow-md">
      <div className='flex justify-between mb-6'> 
        <p className="text-xl font-normal mb-2">Create a job</p>
        <p className="text-lg font-normal mb-2">Step 1</p>
      </div>
      
      <form>
        <Input
          label="Job Title"
          name="jobTitle"
          type="text"
          placeholder="ex. UX UI Designer"
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value})}
          required
          width="full"
        />

        <Input
          label="Company Name"
          name="companyName"
          type="text"
          placeholder="ex. Polynomial AI"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value})}
          required
          width="full"
        />

        <Input
          label="Industry"
          name="industry"
          type="text"
          placeholder="ex. Information Technology"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value})}
          required
          width="full"
        />

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <Input
              label="Location"
              name="location"
              type="text"
              placeholder="ex. Chennai"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value})}
              width="full"
            />
          </div>

          <div className="w-1/2 ml-2">
            <Input
              label="Remote Type"
              name="remoteType"
              type="text"
              placeholder="ex. In-office"
              value={formData.remoteType}
              onChange={(e) => setFormData({ ...formData, remoteType: e.target.value})}
              width="full"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-col items-end">
        <Button 
          name="Next" 
          onClick={onClick} 
        />
      </div>
    </div>
  );
}

export default Form1;