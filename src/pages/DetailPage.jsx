import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
// import { asyncAddComment } from '../states/threadDetail/action';
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';

export default function DetailPage() {
  const { id } = useParams();
  const { threadDetail = [], authUser = null } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ content, id }));
  };

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  if (!threadDetail) {
    return null;
  }
  return (
    <section className="detail-wrap">
      <ThreadDetail
        key={threadDetail.id}
        {...threadDetail}
        authUser={authUser}
        onAddComment={onAddComment}
        onUpVoteThread={onUpVoteThread}
        onDownVoteThread={onDownVoteThread}
      />
    </section>
  );
}
