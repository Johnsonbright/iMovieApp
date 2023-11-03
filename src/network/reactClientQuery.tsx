import {QueryClient} from 'react-query';

export const rootClientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 60000 * 60,
      retry: 3,
      staleTime: 60000 * 2,
      refetchOnReconnect: true,
    },
  },
});
