import * as action from './action-creators';

describe('Test function creators of actions', () => {
  test('Testing loadFavMovies', () => {
    expect(action.loadFavMovies()).toBeDefined();
  });

  test('Testing addMovies', () => {
    expect(action.addMovies()).toBeDefined();
  });

  test('Testing removeMovies', () => {
    expect(action.removeMovies()).toBeDefined();
  });

  test('Testing updateMovies', () => {
    expect(action.updateMovies()).toBeDefined();
  });
});
