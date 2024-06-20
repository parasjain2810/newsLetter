import {configureStore} from '@reduxjs/toolkit'
import { newsCart } from './reducer';
const store=configureStore({
    reducer:{
        news:newsCart,
    },
});
export default store;