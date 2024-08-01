/**
 * @TODO: Define reducer for the talkDetail state
 */
import { ActionType } from './action';

export default function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    default:
      return threadDetail;
  }
}
