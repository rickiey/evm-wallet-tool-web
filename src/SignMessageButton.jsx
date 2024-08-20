// SignMessageButton.js
import React, { useContext, useEffect, useState } from 'react';
import { MessageContext } from './MessageContext';

function SignMessageButton() {
  const { message, setSignature, selectedAccount, setSelectedAccount } = useContext(MessageContext);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);

        // 如果没有选择账户且本地存储中没有账户，默认选择第一个账户
        if (!selectedAccount && accounts.length > 0) {
          setSelectedAccount(accounts[0]);
        }
      }
    }

    fetchAccounts();
  }, [selectedAccount, setSelectedAccount]);

  const handleSignMessage = async () => {
    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    if (!selectedAccount) {
      alert('Please select an account!');
      return;
    }

    try {
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, selectedAccount],
      });

      setSignature(signature);
      alert(`Message signed successfully: ${signature}`);
    } catch (error) {
      console.error(error);
      alert('Failed to sign message');
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {accounts.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSignMessage}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Sign Message
      </button>
    </div>
  );
}

export default SignMessageButton;
