import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {APP_SCREEN_LIST} from '../constants';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type ScreenConfig = {
  name: string;
  component: React.ComponentType<NativeStackScreenProps<any, any>>;
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

const routes = [
  {
    name: APP_SCREEN_LIST.HOME,
    component: Home,
    options: {headerShown: false},
  },
  {
    name: APP_SCREEN_LIST.DETAILS,
    component: Details,
    options: {headerShown: false},
  },
];

export {MainNavigator as default};
