import React, { useState } from 'react';

function ChangeAllocation() {
  const [allocation, setAllocation] = useState('');
  const selectedCurrency = '$'; 

  const handleAllocationChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAllocation(value);
    }
  };

  return (
    <div>
      <label>Change Allocation:</label>
      <input
        type="text"
        value={`${selectedCurrency} ${allocation}`}
        onChange={handleAllocationChange}
      />
    </div>
  );
}

export default ChangeAllocation;
