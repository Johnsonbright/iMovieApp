import React, {FunctionComponent, ReactNode} from 'react';
import 'redux-persist';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {QueryClientProvider} from 'react-query';
import {rootClientQuery} from '../network/reactClientQuery';

const Provider: FunctionComponent<{children: ReactNode}> = ({children}) => (
  <QueryClientProvider client={rootClientQuery}>
    <ReduxProvider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </ReduxProvider>
  </QueryClientProvider>
);

export default Provider;
