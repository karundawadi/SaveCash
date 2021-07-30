import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const state = {
    authienticated: false,
};

const reducer = (state:any, action:any) => ({
    ...state,...action
});

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReuducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReuducer, state);

const persistor = persistStore(store);

export {store , persistor};