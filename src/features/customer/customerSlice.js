import { useReducer } from "react";

const customerInitialstate = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = customerInitialstate, action) {
  switch (action.type) {
    case "customer/create":
      return { ...state, fullname: action.payload.fullname };
    case "customer/edit":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
      };
    default:
      return state;
  }
}

export function create(name, id) {
  return {
    type: "customer/create",
    payload: { fullname: name, nationalId: id, createdAt: Date().toString() },
  };
}

export function edit(name, id) {
  return {
    type: "customer/create",
    payload: { fullname: name, nationalId: id },
  };
}
