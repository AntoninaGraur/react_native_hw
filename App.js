
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import "react-native-gesture-handler";

import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import Home from "./Screens/Home";
import TabNavigation from "./Screens/TabNavigation";

import ProfileScreen from "./Screens/ProfileScreens";
import CommentsCreeen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";


import { Provider } from "react-redux";
import store from "./redux/store/store";
import CreatePostsScreen from "./Screens/MakePostsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
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
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ title: "Create Post " }}
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
    // </Provider>
  );
}
