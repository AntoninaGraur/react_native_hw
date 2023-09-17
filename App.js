
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import "react-native-gesture-handler";

import LoginScreen from "./Screens/LoginScreen";

import Home from "./Screens/Home";


import CommentsCreeen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";


import { Provider } from "react-redux";
import store from "./redux/store";


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
       
       
       
     
        <Stack.Screen
          name="CommentsScreen"
          component={CommentsCreeen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
      </NavigationContainer>
     </Provider>
  );
}
