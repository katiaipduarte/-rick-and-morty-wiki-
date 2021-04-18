import { action, PayloadAction } from 'typesafe-actions';
import { CharacterResponse } from '../../interfaces/character-response';
import { CharactersType } from './type';

export const updateData = (result: CharacterResponse): PayloadAction<string, CharacterResponse> =>
  action(CharactersType.UPDATE, result);
