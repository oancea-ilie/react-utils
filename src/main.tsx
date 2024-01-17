import ReactDOM from 'react-dom/client';
import AppWrapper from './AppWrapper';

const root = document.getElementById('root');
if (!root) {
  throw Error('No HTML element with root id found in index.html');
}
ReactDOM.createRoot(root).render(
  // <React.StrictMode>
  <AppWrapper />,
  // </React.StrictMode>,
);
