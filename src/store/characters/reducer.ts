import { Reducer } from 'redux';
import { CharacterResponse } from '../../interfaces/character-response';
import { CharactersType, INITIAL_STATE } from './type';

type CharactersReducer = {
  type: string;
  payload?: any;
};

const getNextPage = (nextUrl: string | null): number => {
  if (nextUrl === null) {
    return 1;
  }
  const split = nextUrl.split('page=');
  if (split.length === 0) {
    return 1;
  }

  return +split[1];
};

const charactersReducer: Reducer<CharacterResponse> = (
  state: CharacterResponse = INITIAL_STATE,
  action: CharactersReducer,
) => {
  switch (action.type) {
    case CharactersType.UPDATE:
      return {
        ...state,
        results: action.payload.results,
        info: {
          ...action.payload.info,
          nextPage: getNextPage(action.payload.info.next),
        },
      };

    default:
      return { ...state };
  }
};

export default charactersReducer;
