import {createStore} from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers/allreducer'

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};