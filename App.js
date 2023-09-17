import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import CommentsCreeen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";
import store from "./redux/store";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user:", user);
      setUser(user);
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Registration">
            {user ? (
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            ) : (
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
