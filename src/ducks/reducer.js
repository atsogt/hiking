import axios from "axios";
import { stat } from "fs";
const initialState = {
  username: "",
  password: ""
};
//Action types

const REGISTER_USER = "REGISTER_USER";

// Action creator

export const registerUser = (username, password) => {
  console.log("hit");
  return {
    type: REGISTER_USER,
    payload: axios.post("/api/hello", { username, password })
  };
};

// export function test(input) {
//   return {
//     type: REGISTER_USER,
//     payload: input
//   };
// }
// export function login(username, password) {
//   return {
//     type: LOGIN,
//     payload: axios.post("/auth/login", { username, password })
//   };
// }

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };

    case `${REGISTER_USER}_REJECTED`:
      return {
        ...state,
        error: "Username already taken"
      };

    default:
      return state;
  }
}
