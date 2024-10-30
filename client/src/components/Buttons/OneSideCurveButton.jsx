import React from 'react';

const OneSideCurveButton = ({ text }) => {
  return (

    <button class="relative inline-block text-slate-100 bg-orangeL px-2 py-2 transform -skew-x-12 hover:bg-white hover:text-orangeL font-Outfit font-medium text-18px">
      {text}
    </button>
  );
};

export default OneSideCurveButton;
