import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
import { activePlanReducer } from "./activePlanReducer";
import { activeStepReducer } from "./activeStepReducer";
import { billingReducer } from "./billingReducer";
import { registrationReducer } from "./registrationReducer";
import { selectedAdditionsReducer } from "./selectedAdditionsReducer";

const rootReducer = combineReducers({
  registr: registrationReducer,
  billing: billingReducer,
  activePlan: activePlanReducer,
  activeStep: activeStepReducer,
  selectedAdditions: selectedAdditionsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
