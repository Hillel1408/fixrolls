import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "store/store";
import { YMaps } from "@pbe/react-yandex-maps";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <YMaps
                query={{
                    apikey: "29294198-6cdc-4996-a870-01e89b830f3e",
                    suggest_apikey: "dbcf1e0c-bbad-486e-a61a-9487b9d5c70d",
                    lang: "ru_RU",
                }}
            >
                <App />
            </YMaps>
        </PersistGate>
    </Provider>,
);
