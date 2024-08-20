import App from './App';
import { MessageProvider } from './MessageContext';
import './index.css'; // 引入 Tailwind 的样式
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MessageProvider>
  <App />
</MessageProvider>);

