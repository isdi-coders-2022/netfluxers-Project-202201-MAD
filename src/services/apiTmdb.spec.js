import axios from 'axios';
import * as api from './apiTmdb';

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
  test('Tested getDetail', () => {
    const idmovie = '555';
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
    return api.getDetail(idmovie).then((data) => {
      expect(data).toEqual(response);
    });
  });

  test('Tested getMovieGenres', () => {
    const idgenred = '12';
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
    return api.getDetail(idgenred).then((data) => {
      expect(data).toEqual(response);
    });
  });

  test('Tested getTrailer', () => {
    const idmovie = '555';
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
    return api.getTrailer(idmovie).then((data) => {
      expect(data).toEqual(response);
    });
  });

  test('Tested getCast', () => {
    const idmovie = '555';
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
    return api.getCast(idmovie).then((data) => {
      expect(data).toEqual(response);
    });
  });
});
