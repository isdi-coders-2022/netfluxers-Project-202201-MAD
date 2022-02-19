import axios from 'axios';
import * as api from './apiLocal';

jest.mock('axios');

describe('given the local call to GET', () => {
  beforeEach(() => {
    const response = {
      data: {
        results: [
          {
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          },
        ],
      },
    };
    axios.get.mockResolvedValue(response);
  });
  test('The answer must be', () => {
    const response = {
      data: {
        results: [
          {
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          },
        ],
      },
    };
    return api.getAllFav().then((data) => {
      expect(data).toEqual(response);
    });
  });
});
