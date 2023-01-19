const defaultState = {
  value: "Monthly",
};
const CHANGE_BILLING = "CHANGE_BILLING";

export const billingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BILLING:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export const changeBillingAction = (payload) => ({
  type: CHANGE_BILLING,
  payload,
});
