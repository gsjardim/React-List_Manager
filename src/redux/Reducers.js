import * as ActionTypes from './ActionTypes'

export const Lists = (state = { lists: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LIST:
            return { ...state, lists: [...state.lists, action.payload] }
            break;

        default:
            return state
            break;
    }
}