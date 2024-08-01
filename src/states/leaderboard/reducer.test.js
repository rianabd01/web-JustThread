import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import leaderboardsReducer from './reducer';
/**
 * scenario test
 *
 * ## leaderboardsReducer function
 *  - should return initial state when given unknown actiontype
 *  - should return leaderboards list when given RECEIVE_LEADERBOARDS actiontype
 */

describe('leaderboardsReducer function', () => {
  it('should return initial state when given unknown actiontype', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = leaderboardsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderboards list when given RECEIVE_LEADERBOARDS actiontype', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        // Start of Selection
        leaderboards: [
          {
            user: {
              id: 'user-mQhLzINW_w5TxxYf',
              name: 'Dimas Saputra',
              email: 'dimas@dicoding.com',
              avatar:
                'https://ui-avatars.com/api/?name=DimasSaputra&background=random',
            },
            score: 25,
          },
          {
            user: {
              id: 'user-asdfkjadf_dsaf',
              name: 'Dico',
              email: 'dico@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dico&background=random',
            },
            score: 10,
          },
        ],
      },
    };

    const nextState = leaderboardsReducer(initialState, action);
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
