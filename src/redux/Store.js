import {createStore, combineReducers } from 'redux';
import { Lists } from './Reducers'

export function ConfigureStore(){

    const store = createStore(
        combineReducers({
            lists: Lists
        })
    )
    return store;
}