// eslint-disable-next-line object-curly-newline
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncUsersAndThreads } from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

/**
 * skenario test
 *
 * ## asyncUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadsResponse = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-Uiajdlai7IJk',
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
    ownerId: 'user-1arruYipuS9PIhPm',
    totalComments: 1,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'user-1arruYipuS9PIhPm',
    name: 'surya16',
    email: 'surya16@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=surya16&background=random',
  },
  {
    id: 'user-Uiajdlai7IJk',
    name: 'dico',
    email: 'dico@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=dico&background=random',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('sharedThunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThread = api.getAllThread;
  });
  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThread = api._getAllThread;

    delete api._getAllUsers;
    delete api._getAllThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThread = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch

    const dispatch = vi.fn();

    await asyncUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
