import { action, PayloadAction } from 'typesafe-actions';
import { CharacterResponse } from '../../interfaces/character-response';
import { CharactersType } from './type';

export const updateData = (result: CharacterResponse): PayloadAction<string, CharacterResponse> =>
  action(CharactersType.UPDATE, result);

export const modalStatus = (status: boolean): PayloadAction<string, boolean> =>
  action(CharactersType.MODAL_STATUS, status);

export const selectCharacter = (id: number): PayloadAction<string, number> => action(CharactersType.SELECTED, id);

export const searchQuery = (query: string): PayloadAction<string, string> => action(CharactersType.SEARCH_QUERY, query);
