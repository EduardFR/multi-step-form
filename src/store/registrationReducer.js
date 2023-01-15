const defaultState = {
  valueName: "",
  valueEmail: "",
  valuePhone: "",
};

const ADD_USER_NAME = "USER_NAME";
const ADD_USER_EMAIL = "USER_EMAIL";
const ADD_USER_PHONE = "ADD_USER_PHONE";

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_NAME:
      return { ...state, valueName: action.payload };
    case ADD_USER_EMAIL:
      return { ...state, valueEmail: action.payload };
    case ADD_USER_PHONE:
      return { ...state, valuePhone: action.payload };

    default:
      return state;
  }
};

export const addUserNameAction = (payload) => ({
  type: ADD_USER_NAME,
  payload,
});
export const addUserEmailAction = (payload) => ({
  type: ADD_USER_EMAIL,
  payload,
});
export const addUserPhoneAction = (payload) => ({
  type: ADD_USER_PHONE,
  payload,
});
