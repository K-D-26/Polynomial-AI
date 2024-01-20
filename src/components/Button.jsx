import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button
      className={"bg-[#1597E4] text-[#FAFAFA] mt-[56px] mb-8 px-4 py-2 rounded-md"}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;