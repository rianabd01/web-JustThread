import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import threadDetailReducer from './reducer';

/**
 * scenario test
 *
 * ## threadDetailReducer function
 *  - should return threadDetail when given RECEIVE_THREAD_DETAIL actiontype
 *  - should Remove threadDetail states when given CLEAR_THREAD_DETAIL actiontype
 */

describe('threadDetailReducer function', () => {
  it('should return threadDetail when given RECEIVE_THREAD_DETAIL actiontype', () => {
    const initialState = {};
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-Np47p4jhUXYhrhRn',
          title: 'Bagaimana pengalamanmu belajar Redux?',
          body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
          createdAt: '2023-05-29T07:55:52.266Z',
          owner: {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'Dimas Saputra',
            avatar:
              'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          category: 'redux',
          comments: [],
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should Remove threadDetail states when given CLEAR_THREAD_DETAIL actiontype', () => {
    const initialState = {
      id: 'thread-Np47p4jhUXYhrhRn',
      title: 'Bagaimana pengalamanmu belajar Redux?',
      body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
      createdAt: '2023-05-29T07:55:52.266Z',
      owner: {
        id: 'user-mQhLzINW_w5TxxYf',
        name: 'Dimas Saputra',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      category: 'redux',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(null);
  });
});
