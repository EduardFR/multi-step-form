const defaultState = {
  name: {
    value: "",
    error: "Name is required!",
  },
  email: {
    value: "",
    error: "Email is required!",
  },
  phone: {
    value: "",
    error: "Phone is required!",
  },
};
const ADD_VALUE_NAME = "ADD_VALUE_NAME";
const ADD_VALUE_EMAIL = "ADD_VALUE_EMAIL";
const ADD_VALUE_PHONE = "ADD_VALUE_PHONE";
const ADD_ERROR_NAME = "ADD_ERROR_NAME";
const ADD_ERROR_EMAIL = "ADD_ERROR_EMAIL";
const ADD_ERROR_PHONE = "ADD_ERROR_PHONE";

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VALUE_NAME:
      return { ...state, name: { value: action.payload } };
    case ADD_VALUE_EMAIL:
      return { ...state, email: { value: action.payload } };
    case ADD_VALUE_PHONE:
      return { ...state, phone: { value: action.payload } };
    case ADD_ERROR_NAME:
      return {
        ...state,
        name: { error: action.payload, value: state.name.value },
      };
    case ADD_ERROR_EMAIL:
      return {
        ...state,
        email: { error: action.payload, value: state.email.value },
      };
    case ADD_ERROR_PHONE:
      return {
        ...state,
        phone: { error: action.payload, value: state.phone.value },
      };

    default:
      return state;
  }
};

export const addValueNameAction = (payload) => ({
  type: ADD_VALUE_NAME,
  payload,
});
export const addValueEmailAction = (payload) => ({
  type: ADD_VALUE_EMAIL,
  payload,
});
export const addValuePhoneAction = (payload) => ({
  type: ADD_VALUE_PHONE,
  payload,
});
export const addErrorNameAction = (payload) => ({
  type: ADD_ERROR_NAME,
  payload,
});
export const addErrorEmailAction = (payload) => ({
  type: ADD_ERROR_EMAIL,
  payload,
});
export const addErrorPhoneAction = (payload) => ({
  type: ADD_ERROR_PHONE,
  payload,
});
