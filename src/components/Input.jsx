import React from 'react';

const Input = ({ label, type, name, value, placeholder, onChange, width, required }) => {
  return (
    <div className={`mb-4 ${width ? `w-${width}` : 'w-full'}`}>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        className="border border-gray-300 p-2 rounded w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;