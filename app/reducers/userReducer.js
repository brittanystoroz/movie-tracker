const initialState = {
  id: null,
  name: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN': {
      return action.user;
    }

    default:
      return state;
  }
}

export default userReducer;