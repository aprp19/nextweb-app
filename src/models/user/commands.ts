import { TAction, TDispatch } from "@models/types.js";
import { User, UserAction, UserActionType } from "./types.js";
import { apiFetch } from "@api/base.js";

export const UserCommand = {
  getUsers: (): TAction<UserAction, void> => {
    return (dispatch: TDispatch<UserAction>) => {
      return apiFetch().get(`/users`)
        .then(response => {
          const users = response.data as User[];
          dispatch({
            data: users,
            type: UserActionType.GetUsers
          });
        });
    };
  },
  searchUsers: (search: string): TAction<UserAction, void> => {
    return (dispatch: TDispatch<UserAction>) => {
      return apiFetch().get(`/users`)
        .then(response => {
          const users = response.data as User[];
          dispatch({
            data: users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())),
            type: UserActionType.GetUsers
          });
        });
    };
  }
}
