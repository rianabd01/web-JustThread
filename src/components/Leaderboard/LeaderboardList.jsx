import React from 'react';
import PropTypes from 'prop-types';
import PostAccount from '../PostAccount';
import { authUserPropShape } from '../props';

export default function LeaderboardList({ user, score = 0 }) {
  return (
    <div className="leaderboard_item">
      <PostAccount image={user.avatar} name={user.name} />
      <p className="leaderboard_score">{score}</p>
    </div>
  );
}

LeaderboardList.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({ ...authUserPropShape })).isRequired,
  score: PropTypes.number.isRequired,
};
