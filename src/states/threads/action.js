import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator(thread) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: thread,
  };
}

function downVoteThreadActionCreator(thread) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: thread,
  };
}

function neutralizeVoteThreadActionCreator(thread) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: thread,
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const thread = await api.upVoteThread(threadId);
      dispatch(upVoteThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const thread = await api.downVoteThread(threadId);

      dispatch(downVoteThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  neutralizeVoteThreadActionCreator,
};
