import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

console.log(
  '%cSite built & designed by Ashray Pardeshi',
  'font-size: 14px; font-weight: bold; color: #1E5C7A;',
);
console.log(
  '%cWant a website this polished for your own business? WhatsApp: +91 9503953951',
  'font-size: 12px; color: #E4B75F;',
);

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
