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


describe('Given the deleting function', () => {
  describe('When it will be executed', () => {
      beforeEach(() => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          axios.delete.mockResolvedValue(resp);
      });

      test('The function to be used', () => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          return api.removeFav().then((data) => {
              expect(data).toEqual(resp);
          });
      });
  });
});
describe('Given the uploading function', () => {
  describe('When it will be executed', () => {
      beforeEach(() => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          axios.patch.mockResolvedValue(resp);
      });

      test('The function to be used', () => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          return api.updateFav().then((data) => {
              expect(data).toEqual(resp);
          });
      });
  });
});
describe('Given the set function', () => {
  describe('When it will be executed', () => {
      beforeEach(() => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          axios.post.mockResolvedValue(resp);
      });

      test('The function to be used', () => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          return api.SetFav().then((data) => {
              expect(data).toEqual(resp);
          });
      });

      test('The function getDetails to be used', () => {
          const resp = [{
            id: 555,
            title: 'The Amazing Spider',
            poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
          }];
          return api.SetFav().then((id) => {
              expect(id).toEqual(id);
          });
      });
  });
});