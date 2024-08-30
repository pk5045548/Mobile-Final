import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SchedulePage from './screens/SchedulePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Schedule" component={SchedulePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}