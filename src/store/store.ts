import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { CharacterResponse } from '../interfaces/character-response';
import charactersReducer from './characters/reducer';

export interface GlobalState {
  charactersState: CharacterResponse;
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
