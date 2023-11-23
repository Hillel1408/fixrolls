import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "store/modalsSlice";

const store = configureStore({
    reducer: {
        main: mainReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
