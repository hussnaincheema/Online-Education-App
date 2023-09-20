import React from 'react';
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
// import About from './app/Screens/About';
// import Contact from './app/Screens/Contact';
// import Course from './app/Screens/Course';
// import UserData from './app/Screens/UserData';
import CourseDetails from '../Screens/CourseDetails';


const Stack = createNativeStackNavigator();


export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottom" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomTab} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
