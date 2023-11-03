import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {APP_SCREEN_LIST} from '../constants';
import Home from '../screens/Home';
import Details from '../screens/Details'; // Importing DetailsProps type from the Details screen
import {SafeAreaProvider} from 'react-native-safe-area-context';

type ScreenConfig = {
  name: string;
  component: React.ComponentType<any>;
  options?: object;
  initialParams?: object;
};

type RenderScreenFunction = (
  screenConfig: ScreenConfig,
  index: number,
) => React.ReactNode;

const Stack = createStackNavigator();

const renderScreen: RenderScreenFunction = (
  {name, component, options = {}, initialParams},
  index,
) => {
  return (
    <Stack.Screen
      name={name}
      key={index}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
};

const MainNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        {routes.map((item, index) => {
          return renderScreen(item, index);
        })}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const routes: ScreenConfig[] = [
  {
    name: APP_SCREEN_LIST.HOME,
    component: Home,
    options: {headerShown: false},
  },
  {
    name: APP_SCREEN_LIST.DETAILS,
    component: Details as React.ComponentType<any>, // Casting Details component
    options: {headerShown: false},
  },
];

export {MainNavigator as default};
