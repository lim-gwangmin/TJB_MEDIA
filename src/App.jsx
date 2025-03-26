import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import RootRoutes from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import '@styles/common.css';
import theme from '@styles/theme';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <RootRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
