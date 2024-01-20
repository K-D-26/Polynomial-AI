import React from 'react';

const RadioButton = ({ label, options, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="flex">
        {options.map((option) => (
          <div key={option.value} className="flex items-center mr-4">
            <input
              type="radio"
              id={option.value}
              name={label}
              value={option.value}
              checked={option.checked}
              onChange={() => onChange(option.value)}
              className="mr-2"
            />
            <label htmlFor={option.value} className="text-gray-700">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;