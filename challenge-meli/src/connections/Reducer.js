export default function reducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_VALUE": {
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };
    }

    case "RESET_SEARCH_VALUE": {
      return {
        ...state,
        searchValue: "",
      };
    }

    default: {
      return state;
    }
  }
}
