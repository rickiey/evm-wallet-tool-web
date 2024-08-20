// App.js
// import React from 'react';
import MessageInput from './MessageInput';
import SignMessageButton from './SignMessageButton';
import SignatureDisplay from './SignatureDisplay';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 w-full">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">MetaMask Message Signing</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <MessageInput />
        <SignMessageButton />
        <SignatureDisplay />
      </div>
    </div>
  );
}

export default App;
