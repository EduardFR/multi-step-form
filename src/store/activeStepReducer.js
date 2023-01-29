const defaultState = {
  step: "1",
};
const GET_ACTIVE_STEP = "GET_ACTIVE_STEP";

export const activeStepReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ACTIVE_STEP:
      return { ...state, step: action.payload };

    default:
      return state;
  }
};

export const setActiveStepAction = (payload) => ({
  type: GET_ACTIVE_STEP,
  payload,
});
