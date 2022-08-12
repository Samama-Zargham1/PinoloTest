import ParkOutCompleted from './src/Screens/ParkOutCompleted'
import MyVehicles from './src/Screens/MyVehicles'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyVehicles" component={MyVehicles} />
        <Stack.Screen name="ParkOutCompleted" component={ParkOutCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;