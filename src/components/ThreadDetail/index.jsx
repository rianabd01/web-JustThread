import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import BackToHome from '../BackToHome';
import CommentInput from '../CommentInput';
import CommentItem from '../CommentItem';
import Dislike from '../Thread/Dislike';
import Like from '../Thread/Like';
import PostAccount from '../PostAccount';
import Tags from '../Thread/Tags';
import ThreadBody from '../Thread/ThreadBody';
import ThreadTitle from '../Thread/ThreadTitle';
import { countArray, createdAtToPostedAt } from '../../utils/helpers';
import { authUserPropShape, commentPropShape, ownerPropShape } from '../props';

export default function ThreadDetail({
  id,
  title,
  body,
  createdAt,
  category,
  owner,
  comments,
  upVotesBy,
  downVotesBy,
  onAddComment,
  authUser,
  onUpVoteThread,
  onDownVoteThread,
}) {
  const postedAt = createdAtToPostedAt(createdAt);

  const upVotesTotal = countArray(upVotesBy);
  const downVotesTotal = countArray(downVotesBy);

  return (
    <>
      <div className="detail_header">
        <BackToHome />
        <h1>Detail</h1>
      </div>
      <div className="detail">
        <div className="thread_header">
          <PostAccount name={owner.name} image={owner.avatar} />
          <p className="thread_header_created">{postedAt}</p>
        </div>
        <div className="thread_contents ">
          <div className="thread_post" style={{ cursor: 'auto' }}>
            <ThreadTitle title={title} />
            <ThreadBody body={body} />
          </div>
          <Tags category={category} tagLink="/tag/" />
          <div className="thread_interact">
            <Like
              id={id}
              upVotesTotal={upVotesTotal}
              upVotesBy={upVotesBy}
              authUser={authUser}
              onUpVote={onUpVoteThread}
            />
            <Dislike
              id={id}
              downVotesTotal={downVotesTotal}
              downVotesBy={downVotesBy}
              authUser={authUser}
              onDownVote={onDownVoteThread}
            />
          </div>
          {authUser && <CommentInput onAddComment={onAddComment} />}
          <div className="thread_comments">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem key={comment.id} {...comment} />
              ))
            ) : (
              <p>tidak ada komentar</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerPropShape).isRequired,
  category: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({ ...commentPropShape }))
    .isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddComment: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  authUser: PropTypes.shape(authUserPropShape),
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
};
