// MessageContext.js
import React, { useState, createContext, useEffect } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [selectedAccount, setSelectedAccount] = useState(() => {
    // 尝试从 localStorage 中获取默认账户
    const savedAccount = localStorage.getItem('defaultAccount');
    return savedAccount || '';
  });

  useEffect(() => {
    // 当 selectedAccount 发生变化时，将其存储为默认账户
    if (selectedAccount) {
      localStorage.setItem('defaultAccount', selectedAccount);
    }
  }, [selectedAccount]);

  return (
    <MessageContext.Provider value={{ message, setMessage, signature, setSignature, selectedAccount, setSelectedAccount }}>
      {children}
    </MessageContext.Provider>
  );
};
