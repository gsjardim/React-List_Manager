import * as ActionTypes from './ActionTypes'

export const addList = list => {
    return { type: ActionTypes.ADD_LIST, payload: list }
}

export const postList = list => dispatch => {
    console.log("The list was added to the database.")
    console.log(list.listName);
    console.log(list.items);
    console.log(list.date);
    dispatch(addList(list))
}