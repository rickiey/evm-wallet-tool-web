// SignatureDisplay.js
import  { useContext } from 'react';
import { MessageContext } from './MessageContext';

function SignatureDisplay() {
  const { signature } = useContext(MessageContext);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Signature:</h2>
      {signature ? (
        <p className="bg-gray-100 p-4 rounded-md break-all">{signature}</p>
      ) : (
        <p className="text-gray-500">No signature</p>
      )}
    </div>
  );
}

export default SignatureDisplay;
