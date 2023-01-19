const defaultState = {
  step: "1",
};
const GET_ACTICE_STEP = "GET_ACTICE_STEP";

export const activeStepReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ACTICE_STEP:
      return { ...state, step: action.payload };

    default:
      return state;
  }
};

export const setActiveStepAction = (payload) => ({
  type: GET_ACTICE_STEP,
  payload,
});
