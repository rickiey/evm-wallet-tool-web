// MessageInput.js
import  { useContext } from 'react';
import { MessageContext } from './MessageContext';

function MessageInput() {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div className="mb-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message to sign"
        rows={5} // 设置为5行高度
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default MessageInput;
