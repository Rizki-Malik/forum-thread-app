import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function NeutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncCreateThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(createThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      NeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id })
    );
    try {
      await api.NeutralizeThreadVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        NeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};