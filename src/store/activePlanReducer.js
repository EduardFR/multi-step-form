const defaultState = {
  value: "Arcade",
};
const GET_ACTIVE_PLAN = "GET_ACTIVE_PLAN";

export const activePlanReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ACTIVE_PLAN:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export const getActivePlanAction = (payload) => ({
  type: GET_ACTIVE_PLAN,
  payload,
});
