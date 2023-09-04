import React from 'react';

function BudgetValue({ selectedCurrency }) {
  const budget = 20000; 

  return (
    <div>
      <label>Budget Value:</label>
      <input type="text" value={`${selectedCurrency} ${budget}`} readOnly />
    </div>
  );
}

export default BudgetValue;
