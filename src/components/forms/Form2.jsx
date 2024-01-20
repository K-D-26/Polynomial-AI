import React, { useState } from 'react';
import Input from '../Input';
import RadioButton from '../RadioButton';
import Button from '../Button';

const Form2 = ({ formData, setFormData, onClick }) => {
  const [applyType, setApplyType] = useState();

  const handleApplyTypeChange = (value) => {
    setApplyType(value);
    setFormData({ ...formData, applyType: value})
  };

  const applyTypeOptions = [  
    { value: 'quickApply', label: 'Quick Apply', checked: applyType === 'quickApply' },
    { value: 'externalApply', label: 'External Apply', checked: applyType === 'externalApply' },
  ];

  return (
    <div className="w-[577px] h-[564px] mx-8 mb-8 mt-4 p-6 bg-white rounded shadow-md">
      <div className='flex justify-between mb-6'> 
        <p className="text-xl font-normal mb-2">Create a job</p>
        <p className="text-lg font-normal mb-2">Step 2</p>
      </div>
      <form>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <Input
              label="Experience"
              name="minExp"
              type="number"
              placeholder="Minimum"
              value={formData.minExp}
              onChange={(e) => setFormData({ ...formData, minExp: e.target.value})}
              width="full"
            />
          </div>

          <div className="w-1/2 ml-2">
            <Input
              label="Experience"
              name="maxExp"
              type="number"
              placeholder="Maximum"
              value={formData.maxExp}
              onChange={(e) => setFormData({ ...formData, maxExp: e.target.value})}
              width="full"
            />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <Input
              label="Salary"
              name="minSal"
              type="number"
              placeholder="Minimum"
              value={formData.minSal}
              onChange={(e) => setFormData({ ...formData, minSal: e.target.value})}
              width="full"
            />
          </div>

          <div className="w-1/2 ml-2">
            <Input
              label="Salary"
              name="maxSal"
              type="number"
              placeholder="Maximum"
              value={formData.maxSal}
              onChange={(e) => setFormData({ ...formData, maxSal: e.target.value})}
              width="full"
            />
          </div>
        </div>

        <Input
          label="Total Employee"
          name="totalEmployee"
          type="number"
          placeholder="ex. 100"
          value={formData.totalEmployees}
          onChange={(e) => setFormData({ ...formData, totalEmployees: e.target.value})}
          width="full"
        />

        <RadioButton
          label="Apply type"
          options={applyTypeOptions}
          onChange={handleApplyTypeChange}
        />
      </form>

      <div className="flex flex-col items-end">
        <Button 
          name="Save" 
          onClick={onClick} 
        />
      </div>
    </div>
  );
}

export default Form2;