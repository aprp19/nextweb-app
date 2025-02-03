import type { Action } from 'redux';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { UserAction, UserModel } from './user/types.js';

export interface RootModel {
  user?: UserModel
}

export type RootAction = UserAction; // |

export type TAction<A extends Action, R> = ThunkAction<Promise<R>, RootModel, unknown, A>;
export type TDispatch<A extends Action> = ThunkDispatch<RootModel, unknown, A>;