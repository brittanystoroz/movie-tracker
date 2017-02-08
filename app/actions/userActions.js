function logIn(userData) {
  // returns a fn
  return dispatch => {
    // that returns a Promise
    return fetch('/api/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(user => {
      // which dispatches SIGN_IN when it resolves
      dispatch({
        type: "SIGN_IN",
        user: {
          name: user.data.name,
          id: user.data.id
        }
      });
    })
    .catch(error => {
      // or dispatches SIGN_IN_ERROR when it fails
      dispatch({
        type: "SIGN_IN_ERROR"
      });
    })
  }
}

export {
  logIn
};