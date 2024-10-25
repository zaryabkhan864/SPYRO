import React from 'react';

const OneSideCurveButtonWithOutline = ({ text }) => {
  return (

    <button class="relative inline-block border-2 border-white text-white bg-transparent px-4 py-2 transform -skew-x-12">
      {text}
    </button>
  );
};

export default OneSideCurveButtonWithOutline;
