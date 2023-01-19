const defaultState = {
  additions: [],
};

const SELECTED_ADDITION = "SELECTED_ADDITION";
const UNSELECTED_ADDITION = "UNSELECTED_ADDITION";

export const selectedAdditionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_ADDITION:
      return {
        ...state,
        additions: [...state.additions, action.payload],
      };
    case UNSELECTED_ADDITION:
      return {
        ...state,
        additions: state.additions.filter(
          (addition) => addition !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const selectedAdditionAction = (payload) => ({
  type: SELECTED_ADDITION,
  payload,
});
export const unselectedAdditionAction = (payload) => ({
  type: UNSELECTED_ADDITION,
  payload,
});
