import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from 'redux/authUser/authSlise';



export const store = configureStore({
    reducer: {
        auth: authReducer,

    },

});
