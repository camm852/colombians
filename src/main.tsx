import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';
import './satoshi.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from './context/DataProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DataProvider>
        <App />
      </DataProvider>
    </QueryClientProvider>
  </Router>,
);
