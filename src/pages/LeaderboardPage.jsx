import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Leaderboard from '../components/Leaderboard';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';

export default function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <section className="leaderboard-wrap">
      <Leaderboard leaderboards={leaderboards} />
    </section>
  );
}
