export const SET_MOVIES = "SET_MOVIES";
export const SET_USERS = "SET_USERS";
export const SET_FILTER = "SET_FILTER";

export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setUsers(value) {
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
