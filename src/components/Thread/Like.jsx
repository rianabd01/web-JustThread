import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { authUserPropShape } from '../props';

export default function Like({
  id,
  upVotesTotal = '0',
  upVotesBy = [],
  authUser,
  onUpVote,
}) {
  let isLiked = false;
  if (!authUser) {
    // Nothing
  } else {
    const userId = authUser.id;
    if (upVotesBy) {
      isLiked = upVotesBy.includes(userId);
    }
  }

  return (
    <button type="button" className="like-button" onClick={() => onUpVote(id)}>
      {isLiked ? <BiSolidLike /> : <BiLike />}
      <span>{upVotesTotal}</span>
    </button>
  );
}
Like.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.shape(authUserPropShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesTotal: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  onUpVote: PropTypes.func,
};
