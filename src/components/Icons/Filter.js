import React from 'react';

const Filter = ({ color }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12H6V10H0V12ZM0 0V2H18V0H0ZM0 7H12V5H0V7Z"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default Filter;
