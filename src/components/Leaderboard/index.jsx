import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import BackToHome from '../BackToHome';
import LeaderboardList from './LeaderboardList';
import { authUserPropShape } from '../props';

export default function Leaderboard({ leaderboards = [] }) {
  return (
    <>
      <div className="leaderboards_header">
        <BackToHome />
        <h1>Most active user</h1>
      </div>
      <div className="leaderboards">
        {leaderboards.map((leaderboard) => (
          <LeaderboardList user={leaderboard.user} score={leaderboard.score} />
        ))}
      </div>
    </>
  );
}

Leaderboard.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      ...authUserPropShape,
      score: PropTypes.number.isrequired,
    }),
  ).isRequired,
};
