//import { View, Text } from 'react-native'
import React from 'react'
import Contact from '../Screens/Contact'
import Course from '../Screens/Course'
import About from '../Screens/About'
import Home from '../Screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Config/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: Colors.darkblue,
            activeTintColor: "white",
            inactiveBackgroundColor: Colors.white,
            inactiveTintColor: "black",
            labelStyle: {
                fontSize: 13,
                fontWeight: 'bold',
                paddingBottom: 4,
            },
        }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="home" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen
            name="About"
            component={About}
            options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="person" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen
            name="Course"
            component={Course}
            options={{
                headerShown: false,
                tabBarOptions: {
                    labelStyle: {
                        fontSize: 10,
                        margin: 0,
                        padding: 0,
                    },
                },
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="book-outline" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons name="contact-page" size={24} color="black" />
                )
            }}
        />
    </Tab.Navigator>
)


export default function BottomTab() {
    return (
        <TabNavigator />
    )
}