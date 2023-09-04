import React, { useState } from 'react';

function CurrencyDropdown() {
  const [selectedCurrency, setSelectedCurrency] = useState('$');
  const currencies = ['$ Dollar', '£ Pound', '€ Euro', '₹ Rupee'];

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div>
      <label>Currency:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyDropdown;
