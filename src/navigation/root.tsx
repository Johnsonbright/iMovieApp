import {View, Text} from 'react-native';
import React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationTheme,
  useTheme,
} from '@react-navigation/native';
import {navigationRef} from '../constants';
import MainNavigator from './mainNavigator';
import Provider from '../store/StoreProvider';

export default function Root() {
  const {colors, dark} = useTheme();

  const navigationTheme: NavigationTheme = {
    dark: dark,
    colors: {
      ...(dark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      <Provider>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
}
