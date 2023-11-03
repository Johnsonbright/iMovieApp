import React, {FunctionComponent, ReactNode} from 'react';
import 'redux-persist';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import {QueryClientProvider} from 'react-query';
import {rootClientQuery} from '../network/reactClientQuery';

const Provider: FunctionComponent<{children: ReactNode}> = ({children}) => (
  <QueryClientProvider client={rootClientQuery}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </QueryClientProvider>
);

export default Provider;
