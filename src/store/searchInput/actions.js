export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";

export const setSearchInput = (searchInput) => {
  return {
    type: SET_SEARCH_INPUT,
    payload: searchInput,
  };
};
