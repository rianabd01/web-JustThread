import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreadTitle from './ThreadTitle';
import ThreadBody from './ThreadBody';
import Like from './Like';
import Dislike from './Dislike';
import Tags from './Tags';
import PostAccount from '../PostAccount';
import CommentThread from './CommentThread';
import { threadPropShape } from '../props';
import { countArray } from '../../utils/helpers';

export default function ThreadItem({
  id,
  user,
  title,
  body,
  category,
  totalComments,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
  onToggleTag,
  onUpVote,
  onDownVote,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onThreadClick();
    }
  };

  const upVotesTotal = countArray(upVotesBy);
  const downVotesTotal = countArray(downVotesBy);

  return (
    <div className="card">
      <div className="thread_header">
        <PostAccount name={user.name} image={user.avatar} />
        <p className="thread_header_created">{createdAt}</p>
      </div>
      <div className="thread_contents">
        <div
          className="thread_post"
          onClick={onThreadClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`detail thread ${title}`}
        >
          <ThreadTitle title={title} />
          <ThreadBody body={body} />
        </div>
        <Tags category={category} onToggleTag={onToggleTag} />
        <div className="thread_interact">
          <Like
            id={id}
            upVotesTotal={upVotesTotal}
            upVotesBy={upVotesBy}
            authUser={authUser}
            onUpVote={onUpVote}
          />
          <Dislike
            id={id}
            downVotesTotal={downVotesTotal}
            downVotesBy={downVotesBy}
            authUser={authUser}
            onDownVote={onDownVote}
          />
        </div>
        <CommentThread
          id={1}
          onDetailNavigate={onThreadClick}
          commentTotal={totalComments}
        />
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadPropShape,
};
