import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import alertReducer from './reducers/alertReducer'
import reducer from './reducers/friendsReducer';
import chatReducer from "./reducers/chatReducer";
import roomReducer from "./reducers/roomReducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    alert:alertReducer,
    friends:reducer,
    chat: chatReducer,
    room:roomReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;
