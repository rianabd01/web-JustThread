import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Thread from '../components/Thread';
import { asyncUsersAndThreads } from '../states/shared/action';
import ThreadInput from '../components/ThreadInput';
import {
  asyncAddThread,
  asyncDownVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';
import { createdAtToPostedAt } from '../utils/helpers';
import { asyncToggleTag } from '../states/toggleTag/action';

export default function Homepage() {
  const {
    threads = [],
    users = [],
    authUser = {},
    tag,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    createdAt: createdAtToPostedAt(thread.createdAt),
  }));

  function showThread() {
    let filteredThreadList = [...threadList];
    if (tag) {
      filteredThreadList = threadList.filter(
        (thread) => thread.category === tag,
      );
    }

    return filteredThreadList;
  }

  const handleToggleTag = useCallback(
    (tagName) => {
      const newTag = tagName === tag ? null : tagName;
      dispatch(asyncToggleTag(newTag));
    },
    [dispatch, tag],
  );

  return (
    <section className="thread-wrap">
      {authUser && <ThreadInput addThread={onAddThread} />}
      <Thread
        threads={showThread()}
        authUser={authUser}
        onToggleTag={handleToggleTag}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
      />
    </section>
  );
}
