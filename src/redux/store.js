import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from 'redux/auth/authSlise';



export const store = configureStore({
    reducer: {
        auth: authReducer,

    },

});
