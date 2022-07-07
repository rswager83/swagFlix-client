// Action types
export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";
export const SET_USERS = "SET_USERS";

// Action Creators
export function setMovies(value) {
  console.log("SET_MOVIES action triggered");
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setUsers(value) {
  console.log("SET_USERS action triggered");
  return {
    type: SET_USERS,
    value,
  };
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value,
  };
}
