const ActionType = {
  TOGGLE_TAG: 'TOGGLE_TAG',
};

function toggleTagActionCreator(tag) {
  return {
    type: ActionType.TOGGLE_TAG,
    payload: {
      tag,
    },
  };
}

function asyncToggleTag(tag) {
  return async (dispatch) => {
    dispatch(toggleTagActionCreator(tag));
  };
}

export { ActionType, toggleTagActionCreator, asyncToggleTag };
