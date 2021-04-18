import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import charactersReducer from './characters/reducer';
import { CharacterStore } from './characters/type';

export interface GlobalState {
  charactersState: CharacterStore;
}

const combinedReducer = combineReducers<GlobalState>({
  charactersState: charactersReducer,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(combinedReducer, bindMiddleware([thunk]));

export default store;
