import React from 'react';
import { Provider } from 'react-redux';
import store, {persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from './App';
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter >
                    <App />
                </BrowserRouter>      
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
