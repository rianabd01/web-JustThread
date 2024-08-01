// eslint-disable-next-line object-curly-newline
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveThreadDetail } from './action';
import {
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
} from './action';

/**
 * skenario test
 *
 * ## asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when receive thead detail success
 *  - should dispatch action correctly when receive thread detail error
 */

const fakeThreadDetail = {
  id: 'thread-Np47p4jhUXYhrhRn',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  createdAt: '2023-05-29T07:55:52.266Z',
  owner: {
    id: 'user-mQhLzINW_w5TxxYf',
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
  },
  category: 'redux',
  comments: [],
  upVotesBy: [],
  downVotesBy: [],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('addThreadThunk', () => {
  it('should dispatch action correctly when receive thead detail success', async () => {
    // mock dispatch
    api._getThreadDetail = api.getThreadDetail;

    api.getThreadDetail = () => Promise.resolve(fakeThreadDetail);

    const dispatch = vi.fn();

    await asyncReceiveThreadDetail()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail),
    );

    expect(dispatch).toHaveBeenCalledWith(hideLoading());

    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });
  it('should dispatch action correctly when receive thread detail error', async () => {
    // mock dispatch
    api._getThreadDetail = api.getThreadDetail;

    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();
    await asyncReceiveThreadDetail()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);

    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });
});
