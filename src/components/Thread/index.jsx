import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ThreadItem from './ThreadItem';
import { authUserPropShape, threadPropShape } from '../props';

export default function Thread({
  threads = [],
  authUser = {},
  onToggleTag,
  onUpVote,
  onDownVote,
}) {
  return (
    <div className="thread">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          authUser={authUser}
          {...thread}
          onToggleTag={onToggleTag}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      ))}
    </div>
  );
}

Thread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({ ...threadPropShape }))
    .isRequired,
  authUser: PropTypes.shape(authUserPropShape).isRequired,
  onToggleTag: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};
