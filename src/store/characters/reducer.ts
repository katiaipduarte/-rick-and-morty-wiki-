import { Reducer } from 'redux';
import { CharacterStore, CharactersType, INITIAL_STATE } from './type';

type CharactersReducer = {
  type: string;
  payload?: any;
};

const getNextPage = (nextUrl: string | null): number => {
  if (nextUrl === null || nextUrl === '') {
    return 1;
  }
  const split = nextUrl.split('page=');
  if (split.length === 1) {
    return 1;
  }

  return +split[1];
};

const charactersReducer: Reducer<CharacterStore> = (
  state: CharacterStore = INITIAL_STATE,
  action: CharactersReducer,
) => {
  switch (action.type) {
    case CharactersType.UPDATE:
      return {
        ...state,
        response: {
          results: action.payload.results,
          info: {
            ...action.payload.info,
            nextPage: getNextPage(action.payload.info.next),
          },
        },
      };
    case CharactersType.MODAL_STATUS:
      return { ...state, modalStatus: action.payload };
    case CharactersType.SELECTED:
      return { ...state, selected: action.payload };
    default:
      return { ...state };
  }
};

export default charactersReducer;
