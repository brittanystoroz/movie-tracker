const initialState = {
  id: null,
  name: null
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_MOVIES': {
      return action.user;
    }

    default:
      return state;
  }
}

export default moviesReducer;