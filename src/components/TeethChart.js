import React, { useState } from 'react';
import './TeethChart.css';

const TeethChart = () => {
  const [selectedTeeth, setSelectedTeeth] = useState([]);

  const toggleTooth = (toothNumber) => {
    setSelectedTeeth(prev => 
      prev.includes(toothNumber) 
        ? prev.filter(t => t !== toothNumber)
        : [...prev, toothNumber]
    );
  };

  const renderTooth = (number, isUpper) => (
    <button 
      key={number}
      className={`tooth ${isUpper ? 'upper' : 'lower'} tooth-${number} ${selectedTeeth.includes(number) ? 'selected' : ''}`}
      onClick={() => toggleTooth(number)}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 C20 20 0 50 0 80 C0 100 20 100 50 100 C80 100 100 100 100 80 C100 50 80 20 50 0" />
      </svg>
      <span>{number}</span>
    </button>
  );

  return (
    <div className="teeth-chart">
      <div className="upper-teeth">
        {[...Array(16)].map((_, index) => renderTooth(index + 1, true))}
      </div>
      <div className="lower-teeth">
        {[...Array(16)].map((_, index) => renderTooth(32 - index, false))}
      </div>
    </div>
  );
};

export default TeethChart;
