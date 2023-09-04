import React, { useState } from 'react';

function BudgetAllocation() {
  const [allocation, setAllocation] = useState('');
  const remainingBudget = 20000; 

  const handleAllocationChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && parseInt(value) <= remainingBudget) {
      setAllocation(value);
    }
  };

  return (
    <div>
      <label>Allocation:</label>
      <input
        type="text"
        value={allocation}
        onChange={handleAllocationChange}
      />
      <p>Remaining Budget: {remainingBudget}</p>
    </div>
  );
}

export default BudgetAllocation;
