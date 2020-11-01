import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomePageScreen from "../../homepage/screens";
import Section1Screen from "../../section1/screens";
import { View } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={MyTabs}
      />
      <Stack.Screen
        name="Prova"
        options={{
          headerShown: false,
        }}
        component={Section1Screen}
      />
    </Stack.Navigator>
  );
}

function Test() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upload Photo"
        options={{
          headerShown: false,
        }}
        component={Section1Screen}
      />
      <Stack.Screen
        name="Test"
        options={{
          headerShown: false,
        }}
        component={HomePageScreen}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Feed"
        component={HomePageScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Test}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePageScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator edgeWidth={0}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

Routes.displayName = "Routes";

export default Routes;
