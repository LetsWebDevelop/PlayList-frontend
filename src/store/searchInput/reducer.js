import { SET_SEARCH_INPUT } from "./actions";

const initialState = {
  searchInput: null,
};

export default function searchInputReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return { searchInput: action.payload };
    default:
      return state;
  }
}
