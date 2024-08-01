// eslint-disable-next-line object-curly-newline
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncReceiveLeaderboard,
  receiveLeaderboardsActionCreator,
} from './action';

/**
 * skenario test
 *
 * ## asyncReceiveLeaderboard thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeLeaderboards = [
  {
    user: {
      id: 'user-mQhLzINW_w5TxxYf',
      name: 'Dimas Saputra',
      email: 'dimas@dicoding.com',
      avatar: 'https://ui-avatars.com/api/?name=DimasSaputra&background=random',
    },
    score: 25,
  },
  {
    user: {
      id: 'user-asdfkjadf_dsaf',
      name: 'Dico',
      email: 'dico@dicoding.com',
      avatar: 'https://ui-avatars.com/api/?name=Dico&background=random',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderBoard thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });
  afterEach(() => {
    api.getLeaderboards = api._getLeaderBoards;

    delete api._getAllUsers;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboards);
    // mock dispatch

    const dispatch = vi.fn();

    await asyncReceiveLeaderboard()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboards),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalled(fakeErrorResponse.message);
  });
});
