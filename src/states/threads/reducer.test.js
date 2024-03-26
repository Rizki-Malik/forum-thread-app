/**
* test scenario for threadReducer
*
* - threadReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by CREATE_THREAD action
*  - should return the threads with the up vote thread when given by UP_VOTE_THREAD action
*  - should return the threads with the down vote thread when given by DOWN_VOTE_THREAD action
*  - should return the up or down vote with the neutralize vote thread when given by NEUTRALIZE_VOTE_THREAD action
*
*/
import { describe, it, expect } from 'vitest';
import threadReducer from './reducer';
 
describe('threadReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = threadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by RECEIVE_THREADS action', () => {
        // arrange
        const initialState = [];
        const action = {
            type:  'RECEIVE_THREADS',
            payload: {
                threads: [
                    {
                        id: "thread-69",
                        title: "Thread Pertama",
                        body: "Ini adalah test thread pertama",
                        category: "General",
                        createdAt: "2021-06-21T07:00:00.000Z",
                        ownerId: "users-1",
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0
                    },
                    {
                        id: "thread-70",
                        title: "Thread Kedua",
                        body: "Ini adalah test thread kedua",
                        category: "General",
                        createdAt: "2021-06-21T07:00:00.000Z",
                        ownerId: "users-1",
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0
                    },
                ],
            },
        };

        // action
        const nextState = threadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
            // arrange
            const initialState = [
                {
                    id: "thread-69",
                    title: "Thread Pertama",
                    body: "Ini adalah test thread pertama",
                    category: "General",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    ownerId: "users-1",
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0
                },
            ];

            const action = {
                type: 'CREATE_THREAD',
                payload: {
                    thread: {
                        id: "thread-70",
                        title: "Thread Kedua",
                        body: "Ini adalah test thread kedua",
                        category: "General",
                        createdAt: "2021-06-21T07:00:00.000Z",
                        ownerId: "users-1",
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0
                    },
                },
            };

            // action
            const nextState = threadReducer(initialState, action);

            // assert
            expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it('should return the threads with the up vote thread when given by UP_VOTE_THREAD action', () => {
        // arrange
        const initialState = [
            {
                id: "thread-69",
                title: "Thread Pertama",
                body: "Ini adalah test thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0
            },
        ];

        const action = {
            type: 'UP_VOTE_THREAD',
            payload: {
                threadId: "thread-69",
                userId: "users-1",
            },
        };

        // action: like thread
        const nextState = threadReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
                downVotesBy: [],
            },
        ]);
    });

    it('should return the threads with the down vote thread when given by DOWN_VOTE_THREAD action', () => {
        // arrange
        const initialState = [
            {
                id: "thread-69",
                title: "Thread Pertama",
                body: "Ini adalah test thread pertama",
                category: "General",
                createdAt: "2021-06-21T07:00:00.000Z",
                ownerId: "users-1",
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0
            },
        ];

        const action = {
            type: 'DOWN_VOTE_THREAD',
            payload: {
                threadId: "thread-69",
                userId: "users-1",
            },
        };

        // action: dislike thread
        const nextState = threadReducer(initialState, action);

        // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [],
                downVotesBy: [action.payload.userId],
            },
        ]);
    });

    it('should return the up or down vote with the neutralize vote thread when given by NEUTRALIZE_VOTE_THREAD action', () => {
        const initialState = [
            {
              id: 'thread-69',
              title: 'Thread Pertama',
              body: 'Ini adalah test thread pertama',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-1',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0
            },
        ];
      
        const action = {
            type: 'NEUTRALIZE_VOTE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'users-1',
            },
        };
        
        // action
        const nextState = threadReducer(initialState, action);
        
            // assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [],
                downVotesBy: [],
            },
        ]);
    });
});