import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "store/modalsSlice";
import orderReducer from "store/orderSlice";

const store = configureStore({
    reducer: {
        modals: modalsReducer,
        orders: orderReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
