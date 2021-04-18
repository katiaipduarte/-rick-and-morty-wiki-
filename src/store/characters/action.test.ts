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
});
