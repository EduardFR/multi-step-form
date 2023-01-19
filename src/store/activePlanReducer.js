const defaultState = {
  value: "Arcade",
};
const GET_AVTICE_PLAN = "GET_ACTIVE_PLAN";

export const activePlanReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_AVTICE_PLAN:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export const getActivePlanAction = (payload) => ({
  type: GET_AVTICE_PLAN,
  payload,
});
