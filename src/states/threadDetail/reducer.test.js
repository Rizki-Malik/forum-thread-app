/**
* test scenario for threadDetailReducer
*
* - threadDetailReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREAD_DETAIL action
*  - should return the threads with the new thread when given by CREATE_THREAD_DETAIL action
*  - should return the threads with the up vote thread when given by UP_VOTE_THREAD_DETAIL action
*  - should return the threads with the down vote thread when given by DOWN_VOTE_THREAD_DETAIL action
*  - should return the up or down vote with the neutralize vote thread when given by NEUTRALIZE_VOTE_THREAD_DETAIL action
*  - should return the threads with the new thread when given by CREATE_COMMENT action
*  - should return the threads with the up vote thread when given by UP_VOTE_COMMENT action
*  - should return the threads with the down vote thread when given by DOWN_VOTE_COMMENT action
*  - should return the up or down vote with the neutralize vote thread when given by NEUTRALIZE_VOTE_COMMENT action
*
*/
import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';
 
describe('threadDetailReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the thread details when given the RECEIVE_THREAD_DETAIL action', () => {
        // arrange
        const initialState = null;
        const action = {
            type: 'RECEIVE_THREAD_DETAIL',
            payload: {
                threadDetail: {
                    id: "thread-69",
                    title: "Thread Pertama",
                    body: "Ini adalah test thread pertama",
                    category: "General",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    ownerId: "users-1",
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0
                }
            }
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.threadDetail);
    });

    it('should return the thread details with a new thread when given the CREATE_COMMENT action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            comments: []
        };
        const action = {
            type: 'CREATE_COMMENT',
            payload: {
                comment: {
                    id: "comment-1",
                    text: "This is a test comment",
                    userId: "users-2",
                    upVotesBy: [],
                    downVotesBy: []
                }
            }
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        const expectedState = {
            ...initialState,
            comments: [action.payload.comment]
        };
        expect(nextState).toEqual(expectedState);
    });

    it('should return the thread details with upvoted comment when given the UP_VOTE_COMMENT action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 1,
            comments: [{
                id: "comment-1",
                text: "This is a test comment",
                userId: "users-2",
                upVotesBy: [],
                downVotesBy: []
            }]
        };
        const action = {
            type: 'UP_VOTE_COMMENT',
            payload: {
                commentId: "comment-1",
                userId: "users-3"
            }
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        const expectedState = {
            ...initialState,
            comments: [{
                ...initialState.comments[0],
                upVotesBy: [action.payload.userId]
            }]
        };
        expect(nextState).toEqual(expectedState);
    });

    it('should return the thread details with downvoted comment when given the DOWN_VOTE_COMMENT action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 1,
            comments: [{
                id: "comment-1",
                text: "This is a test comment",
                userId: "users-2",
                upVotesBy: [],
                downVotesBy: []
            }]
        };
        const action = {
            type: 'DOWN_VOTE_COMMENT',
            payload: {
                commentId: "comment-1",
                userId: "users-3"
            }
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        const expectedState = {
            ...initialState,
            comments: [{
                ...initialState.comments[0],
                downVotesBy: [action.payload.userId]
            }]
        };
        expect(nextState).toEqual(expectedState);
    });

    it('should return the thread details with neutralized vote on comment when given the NEUTRALIZE_VOTE_COMMENT action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 1,
            comments: [{
                id: "comment-1",
                text: "This is a test comment",
                userId: "users-2",
                upVotesBy: ["users-3"],
                downVotesBy: ["users-4"]
            }]
        };
        const action = {
            type: 'NEUTRALIZE_VOTE_COMMENT',
            payload: {
                commentId: "comment-1",
                userId: "users-3"
            }
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        const expectedState = {
            ...initialState,
            comments: [{
                ...initialState.comments[0],
                upVotesBy: [],
                downVotesBy: ["users-4"]
            }]
        };
        expect(nextState).toEqual(expectedState);
    });

    it('should return the threads with the up vote thread when given by UP_VOTE_THREAD_DETAIL action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {},
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
            created: '2022-01-22T10:06:55.588Z',
        };

        const action = {
            type: 'UP_VOTE_THREAD_DETAIL',
            payload: {
                threadId: "thread-69",
                userId: "user-1",
            },
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [action.payload.userId],
            downVotesBy: [],
        });
    });


    it('should return the thread details with the down vote thread when given the DOWN_VOTE_THREAD_DETAIL action', () => {
        // arrange
        const initialState = {
                id: "thread-69",
                title: "Thread Pertama",
                body: "Ini adalah test thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                owner: {},
                upVotesBy: [],
                downVotesBy: [],
                comments: []
        };

        const action = {
            type: 'DOWN_VOTE_THREAD_DETAIL',
            payload: {
                threadId: "thread-69",
                userId: "users-1",
            },
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        expect(nextState).toEqual({
                ...initialState,
                upVotesBy: [],
                downVotesBy: [action.payload.userId],
            });
    });

    it('should return the up or down vote with the neutralize vote thread when given the NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
        // arrange
        const initialState = {
            id: "thread-69",
            title: "Thread Pertama",
            body: "Ini adalah test thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            comments: []
        };
        const action = {
            type: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
            payload: {
                threadId: "thread-69",
                userId: "users-1",
            },
        };

        // action
        const nextState = threadDetailReducer(initialState, action);

        // assert
        expect(nextState).toEqual({
                ...initialState,
                upVotesBy: [],
                downVotesBy: [],
            });
    });
});