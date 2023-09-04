import React from 'react';

function AllocatedBudget({ department, allocatedBudget, selectedCurrency }) {
  return (
    <div>
      <p>{department} Allocated Budget: {`${selectedCurrency} ${allocatedBudget}`}</p>
    </div>
  );
}

export default AllocatedBudget;
