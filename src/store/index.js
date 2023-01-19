import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
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

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
