// AccountDisplay.js
import  { useContext } from 'react';
import { MessageContext } from './MessageContext';

function AccountDisplay() {
  const { selectedAccount } = useContext(MessageContext);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold text-gray-700">Selected Account:</h2>
      {selectedAccount ? (
        <p className="text-gray-600">{selectedAccount}</p>
      ) : (
        <p className="text-gray-500">No account selected</p>
      )}
    </div>
  );
}

export default AccountDisplay;
