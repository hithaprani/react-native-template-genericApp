import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../UI/Home/Home';
import { Login } from '../UI/Login/Login';
import { LandingScreen } from '../UI/LandingScreen';
import { CustomDrawer } from './Drawer';

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'postLoginStack'}
      drawerContent={(item) => CustomDrawer(item)}>
      <Drawer.Screen name={'postLoginStack'} component={PostLoginStackRoutes} />
    </Drawer.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const PostLoginStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomePage'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomePage'} component={Home} />
    </Stack.Navigator>
  );
};

const PreLoginStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'landingScreen'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'landingScreen'} component={LandingScreen} />
      <Stack.Screen name={'Home'} component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <PreLoginStackRoutes />
    </NavigationContainer>
  );
};
