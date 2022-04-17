import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query';
import { RecoilRoot } from 'recoil';

const root = createRoot(document.getElementById('root') as HTMLElement);

const client = new QueryClient();

root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
