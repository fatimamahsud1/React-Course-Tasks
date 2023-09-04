import React from 'react';

function SpentSoFar({ spentSoFar, selectedCurrency }) {
  return (
    <div>
      <p>Spent So Far: {`${selectedCurrency} ${spentSoFar}`}</p>
    </div>
  );
}

export default SpentSoFar;
