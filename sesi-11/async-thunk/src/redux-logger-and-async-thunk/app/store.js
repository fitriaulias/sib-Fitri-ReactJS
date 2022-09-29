import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import logger from 'redux-logger';


export const store = configureStore({
    reducer: {
        users: usersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})