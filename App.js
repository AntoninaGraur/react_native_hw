import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";

import RegistrationScreen from "./Screens/RegistrationScreen";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store from "./redux/store";
import { useEffect, useState } from "react";
import React from "react";
import { Text } from "react-native";
import MapScreen from "./Screens/MapScreen";

const Stack = createStackNavigator();

export default function App() {
   
  return (
    <Provider store={store.store}>
      {/* <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      > */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Registration">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

            <>
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
            </>
          </Stack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
