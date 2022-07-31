import React from 'react';

import Login from './src/screens/login';
import Logo from './src/screens/logo';
import Home from './src/screens/home';
import AddChallenge from './src/screens/addChallenge';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddChallenge" component={AddChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <MyStack />;
};

export default App;
