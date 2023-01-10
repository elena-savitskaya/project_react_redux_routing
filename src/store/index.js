import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import scriptReduser from './scriptSlice';
import leadReducer from './leadSlice';
import tasksReduser from './tasksSlice';
import changeTasksReduser from './changeTasksSlice';


const rootReducer = combineReducers({
  scripts: scriptReduser,
  leads: leadReducer,
  tasks: tasksReduser,
  changeTasks: changeTasksReduser,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

