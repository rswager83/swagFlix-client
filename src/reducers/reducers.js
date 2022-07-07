import { combineReducers } from "redux";

import { SET_FILTER, SET_MOVIES, SET_USERS } from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      console.log("SET_MOVIES reducer reached");
      return action.value;
    /*   case ADD_Movie:
      return action.value; */
    default:
      return state;
  }
}

function users(state = "", action) {
  switch (action.type) {
    case SET_USERS:
      console.log("SET_USERS reducer reached");
      return action.user;
    default:
      return state;
  }
}

/* This is a combined reducer; same as the code below
function moviesApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    movies: movies(state.movies, action),
  };
} 
*/

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  users,
});

export default moviesApp;
