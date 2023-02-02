import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { persistAuthReducer } from 'redux/auth/authSlise';
import { filterSlice } from 'redux/filter/filterSlice1';
import { contactSlice } from "redux/contacts/contactsSlice1";





export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        contacts: contactSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    }
});

export const persistor = persistStore(store);
