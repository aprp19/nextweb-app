import {
  combineReducers, createStore
} from '@nxweb/core';
import {
  createCommandHook, createDispatchHook, createStoreHook, createStoreProvider
} from '@nxweb/react';
import { RootAction, RootModel } from './types';
import { UserReducer } from './user/reducers';
import { UserCommand } from './user/commands';

// ** Init reducers
const rootReducer = combineReducers({
  user: UserReducer
});

// ** Init commands
const rootCommand = {
  user: UserCommand
}

// ** Create store
export const store = createStore(rootReducer);

// ** Create store provider
export const StoreProvider = createStoreProvider(store);

// ** Create store hook
export const useStore = createStoreHook<RootModel, RootAction>();

// ** Create dispatch hook
export const useDipatch = createDispatchHook<RootModel, RootAction>();

// ** Create command hook
export const useCommand = createCommandHook(rootCommand);
