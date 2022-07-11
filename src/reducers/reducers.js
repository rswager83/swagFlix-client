import { combineReducers } from "redux";
import * as actions from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case actions.SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function users(state = "", action) {
  switch (action.type) {
    case actions.SET_USERS:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  users,
});

export default moviesApp;
