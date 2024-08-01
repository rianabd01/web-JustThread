import React from 'react';
import PropTypes from 'prop-types';
import { BiDislike, BiSolidDislike } from 'react-icons/bi';
import { authUserPropShape } from '../props';

export default function Dislike({
  id,
  downVotesBy,
  downVotesTotal = '0',
  authUser = {},
  onDownVote,
}) {
  let isDisliked = false;
  if (!authUser) {
    // Nothing
  } else {
    const userId = authUser.id;
    if (downVotesBy) {
      isDisliked = downVotesBy.includes(userId);
    }
  }

  return (
    <button
      type="button"
      className="dislike-button"
      onClick={() => onDownVote(id)}
    >
      {isDisliked ? <BiSolidDislike /> : <BiDislike />}
      <span>{downVotesTotal}</span>
    </button>
  );
}

Dislike.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.shape(authUserPropShape).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesTotal: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  onDownVote: PropTypes.func,
};
