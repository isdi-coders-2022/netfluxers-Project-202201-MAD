import axios from 'axios';
import * as api from './apiLocal';

jest.mock('axios');

describe('Testing removeFav', () => {
  beforeEach(() => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    axios.delete.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    return api.removeFav().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing updateFav', () => {
  beforeEach(() => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    axios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    return api.updateFav().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing SetFav', () => {
  beforeEach(() => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    axios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    return api.SetFav().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getAllFav', () => {
  beforeEach(() => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    axios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ];
    return api.getAllFav().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
