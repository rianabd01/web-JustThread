import { ActionType } from './action';

export default function toggleTagReducer(tag = null, action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_TAG:
      return action.payload.tag;
    default:
      return tag;
  }
}
