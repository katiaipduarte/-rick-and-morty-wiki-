import { Character } from './character';
import { Info } from './info';

export type CharacterResponse = {
  info: Info;
  results: Character[];
};
