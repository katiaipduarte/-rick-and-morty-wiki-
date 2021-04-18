import * as actions from './action';
import { CharactersType } from './type';

describe('Test Suite for Characters Store Actions', () => {
  it('should create an action to update characters', () => {
    const mock = {
      info: {
        count: 10,
        next: '',
        pages: 1,
        prev: null,
        nextPage: 1,
      },
      results: [],
    };
    const expectAction = {
      type: CharactersType.UPDATE,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(actions.updateData(mock)).toEqual(expectAction);
  });

  it('should create an action to update modal status', () => {
    const mock = true;

    const expectAction = {
      type: CharactersType.MODAL_STATUS,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(actions.modalStatus(mock)).toEqual(expectAction);
  });

  it('should create an action to update selected character', () => {
    const mock = 1;

    const expectAction = {
      type: CharactersType.SELECTED,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(actions.selectCharacter(mock)).toEqual(expectAction);
  });

  it('should create an action to update search query', () => {
    const mock = 'test';

    const expectAction = {
      type: CharactersType.SEARCH_QUERY,
      error: undefined,
      meta: undefined,
      payload: mock,
    };

    expect(actions.searchQuery(mock)).toEqual(expectAction);
  });
});
