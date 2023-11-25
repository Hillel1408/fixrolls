import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalsReducer from "store/modalsSlice";
import orderReducer from "store/orderSlice";
import cardsReducer from "store/cardsSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    modals: modalsReducer,
    orders: orderReducer,
    cards: cardsReducer,
});

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["cards", "modals"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
