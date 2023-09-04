import React, { useState } from 'react';

function BudgetValue() {
  const [budget, setBudget] = useState(20000);
  const selectedCurrency = '$'; 

  return (
    <div>
      <label>Budget Value:</label>
      <input type="text" value={`${selectedCurrency} ${budget}`} readOnly />
    </div>
  );
}

export default BudgetValue;
