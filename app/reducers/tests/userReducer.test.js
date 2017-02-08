import userReducer from '../userReducer';

const initialState = {
  id: null,
  name: null
};

describe('user reducer', () => {

  it('should return initial state by default', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  });

  it('should return a user object if SIGN_IN_USER is the action type', () => {
    const user = { id: 1, name: 'Bob Loblaw' };

    expect(userReducer(undefined, {
      type: 'SIGN_IN',
      user
    })).toEqual(user);
  });
});