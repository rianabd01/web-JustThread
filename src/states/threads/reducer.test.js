import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

// should return initial state when given unknown actiontype
// should return threads when given RECEIVE_THREADS actiontype

/**
 * skenario test
 *
 * ## threadReducer function
 *  - should return initial state when given unknown actiontype
 *  - should return threads when given RECEIVE_THREADS actiontype
 *  - should return added threads and old threads when given ADD_THREAD actiontype
 */

describe('threadsReducer function', () => {
  it('should return initial state when given unknown actiontype', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return threads when given RECEIVE_THREADS actiontype', () => {
    const initialState = [];

    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-Np47p4jhUXYhrhRn',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 'thread-najsfdnaoIUO0141k',
            title: 'Hai?',
            body: 'KenaPA?',
            category: 'react',
            createdAt: '2024-05-29T07:55:52.266Z',
            ownerId: 'user-nhasdl_ojd8Mn',
            totalComments: 1,
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return added threads and old threads when given ADD_THREAD actiontype', () => {
    const initialState = [
      {
        id: 'thread-Np47p4jhUXYhrhRn',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
      {
        id: 'thread-najsfdnaoIUO0141k',
        title: 'Hai?',
        body: 'KenaPA?',
        category: 'react',
        createdAt: '2024-05-29T07:55:52.266Z',
        ownerId: 'user-nhasdl_ojd8Mn',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
