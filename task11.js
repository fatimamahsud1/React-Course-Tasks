import React, { useState } from 'react';
import CurrencyDropdown from './CurrencyDropdown'; 
import BudgetValue from './BudgetValue'; 
import RemainingBudget from './RemainingBudget'; 
import SpentSoFar from './SpentSoFar'; 
import AllocatedBudget from './AllocatedBudget'; 

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('$'); 

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  };

  return (
    <div>
      <CurrencyDropdown onCurrencyChange={handleCurrencyChange} />
      <BudgetValue selectedCurrency={selectedCurrency} />
      <RemainingBudget remainingBudget={20000} selectedCurrency={selectedCurrency} />
      <SpentSoFar spentSoFar={5000} selectedCurrency={selectedCurrency} />
      <AllocatedBudget department="Department A" allocatedBudget={5000} selectedCurrency={selectedCurrency} />
    </div>
  );
}

export default App;
