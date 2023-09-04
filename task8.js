import React from 'react';

function RemainingBudget({ remainingBudget, selectedCurrency }) {
  return (
    <div>
      <p>Remaining Budget: {`${selectedCurrency} ${remainingBudget}`}</p>
    </div>
  );
}

export default RemainingBudget;
