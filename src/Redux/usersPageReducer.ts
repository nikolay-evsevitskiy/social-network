type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type UsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUserCountType = ReturnType<typeof setTotalUserCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type ToggleIsFollowingProgress = ReturnType<typeof toggleIsFollowingProgress>
type ActionType =
    FollowActionType
    | UnfollowActionType
    | UsersActionType
    | SetCurrentPageType
    | SetTotalUserCountType
    | ToggleIsFetchingType
    | ToggleIsFollowingProgress

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
type UserLocationType = {
    country: string
    city: string
}
export type InitialStateTypeUsersPage = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


const initialState: InitialStateTypeUsersPage = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: InitialStateTypeUsersPage = initialState, action: ActionType): InitialStateTypeUsersPage => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: true}
                    }
                    return t;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: false}
                    }
                    return t;
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USER-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const follow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
};
export const unfollow = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
};
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
};
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-USER-COUNT', totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
export const toggleIsFollowingProgress = (userId: number, followingInProgress: boolean) => {
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress, userId} as const
}

export default usersReducer