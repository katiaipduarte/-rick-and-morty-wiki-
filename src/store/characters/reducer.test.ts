import { AnyAction } from 'redux';
import charactersReducer from './reducer';
import { CharactersType, INITIAL_STATE } from './type';

describe('Test Suite for Characters Store Reducer', () => {
  it('should return default characters list when initial state and action is undefined', () =>
    expect(charactersReducer(undefined, {} as AnyAction)).toEqual(INITIAL_STATE));

  it('should update store by adding current characters list, and return 1 for next page if next is null or empty string', () => {
    const mock = {
      info: {
        count: 10,
        next: '',
        pages: 1,
        prev: null,
        nextPage: 2,
      },
      results: [],
    };

    const updateAction = {
      type: CharactersType.UPDATE,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).response.results.length).toEqual(0);
    expect(charactersReducer(INITIAL_STATE, updateAction).response.info.nextPage).toEqual(1);
  });

  it('should update store by adding current characters list, and return 1 for next page if next does not contain page', () => {
    const mock = {
      info: {
        count: 10,
        next: 'https://rickandmortyapi.com/api/character',
        pages: 1,
        prev: null,
        nextPage: 2,
      },
      results: [],
    };

    const updateAction = {
      type: CharactersType.UPDATE,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).response.results.length).toEqual(0);
    expect(charactersReducer(INITIAL_STATE, updateAction).response.info.nextPage).toEqual(1);
  });

  it('should update store by adding current characters list, and return 3 for next page', () => {
    const mock = {
      info: {
        count: 10,
        next: 'https://rickandmortyapi.com/api/character/?page=3',
        pages: 1,
        prev: null,
        nextPage: 2,
      },
      results: [],
    };

    const updateAction = {
      type: CharactersType.UPDATE,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).response.results.length).toEqual(0);
    expect(charactersReducer(INITIAL_STATE, updateAction).response.info.nextPage).toEqual(3);
  });

  it('should update modal status to open', () => {
    const mock = true;

    const updateAction = {
      type: CharactersType.MODAL_STATUS,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).modalStatus).toBeTruthy();
  });

  it('should update selected character to show in modal', () => {
    const mock = 1;

    const updateAction = {
      type: CharactersType.SELECTED,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).selected).toEqual(1);
  });

  it('should update current search query in use', () => {
    const mock = 'test';

    const updateAction = {
      type: CharactersType.SEARCH_QUERY,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(charactersReducer(INITIAL_STATE, updateAction).searchTerm).toEqual(mock);
  });
});
