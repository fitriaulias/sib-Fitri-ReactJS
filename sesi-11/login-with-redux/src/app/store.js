import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/authSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})