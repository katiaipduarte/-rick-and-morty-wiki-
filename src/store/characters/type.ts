import { CharacterResponse } from '../../interfaces/character-response';

export const CharactersType = {
  UPDATE: '@@CHARACTERS/UPDATE_DATA',
  MODAL_STATUS: '@@CHARACTERS/MODAL_STATUS',
  SELECTED: '@@CHARACTERS/SELECTED',
  SEARCH_QUERY: '@@CHARACTERS/SEARCH_QUERY',
};

export interface CharacterStore {
  response: CharacterResponse;
  modalStatus: boolean;
  selected: number;
  searchTerm: string;
}

export const INITIAL_STATE: CharacterStore = {
  response: {
    info: {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
      nextPage: 1,
    },
    results: [],
  },
  modalStatus: false,
  selected: 0,
  searchTerm: '',
};
