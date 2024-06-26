/**
 * test scenario for leaderboards action
 *
 * - asyncPopulateLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveLeaderboardsActionCreator, asyncPopulateLeaderboards } from './action';
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import api from '../../utils/api';

const fakerLeaderboardsResponse = [
  {
    user: {
      id: 'user-1',
      name: 'Kyouma',
      email: 'kyouma@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getLeaderboards = api.getLeaderBoards;
  });

  afterEach(() => {
    // restore original implementation
    api.getLeaderBoards = api._getLeaderboards;

    // delete backup
    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.resolve(fakerLeaderboardsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakerLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
        // stub implementation
        api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);

        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});