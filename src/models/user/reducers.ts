import { UserAction, UserActionType, userDefault, UserModel } from "./types.js";

export const UserReducer = (state: UserModel = userDefault, action: UserAction): UserModel => {
  switch (action.type) {
    case UserActionType.GetUsers:
      return { ...state, users: action.data };
    default:
      return state;
  }
};
