/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { createdAtToPostedAt } from '../../utils/helpers';
import PostAccount from '../PostAccount';
import './index.css';
import Like from '../Thread/Like';
import Dislike from '../Thread/Dislike';
import { commentPropShape, ownerPropShape } from '../props';

export default function CommentItem({
  id,
  content,
  owner,
  createdAt,
  upVotesBy,
  downVotesBy,
}) {
  const postedAt = createdAtToPostedAt(createdAt);

  return (
    <div className="comment">
      <div className="comment-owner">
        <PostAccount name={owner.name} image={owner.avatar} />
        <p>{postedAt}</p>
      </div>
      <div className="comment-body">
        <p>{content}</p>
        <div className="comment_interact">
          <Like />
          <Dislike />
        </div>
      </div>
    </div>
  );
}
CommentItem.propTypes = {
  ...commentPropShape,
  owner: PropTypes.arrayOf(PropTypes.shape({ ...ownerPropShape })).isRequired,
};
