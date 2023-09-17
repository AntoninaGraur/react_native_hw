import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
      user: userReducer,
  },
});

export default store;