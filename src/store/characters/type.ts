import { CharacterResponse } from '../../interfaces/character-response';

export const CharactersType = {
  UPDATE: '@@CHARACTERS/UPDATE_DATA',
};

export const INITIAL_STATE: CharacterResponse = {
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
    nextPage: 1,
  },
  results: [],
};
