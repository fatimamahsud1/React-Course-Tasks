import React, { useState } from 'react';

function EditableBudgetValue() {
  const [budget, setBudget] = useState(20000);
  const spentSoFar = 5000; 

  const handleIncrease = () => {
    if (budget < 20000) {
      setBudget(budget + 10);
    }
  };

  const handleDecrease = () => {
    if (budget > spentSoFar + 10) {
      setBudget(budget - 10);
    }
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input type="text" value={budget} readOnly />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default EditableBudgetValue;
