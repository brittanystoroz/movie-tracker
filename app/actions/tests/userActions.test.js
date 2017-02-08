// mocks out a store for us & allows us to apply middleware like thunk
import configureMockStore from 'redux-mock-store';

// import thunk so we can incorporate it in our mocked out store
import thunk from 'redux-thunk';

// intercepts API requests made with fetch so we
// can control what kind of response we get back
import fetchMock from 'fetch-mock';

// import any/all of our user actions we want to test
import * as actions from '../userActions';


// mock out a store and apply the thunk middleware
const mockStore = configureMockStore([thunk]);

// create a new store and set its initial state
// we only need the initial state to include the
// data that would be effected by our tests
const store = mockStore({ 
  user: {
    id: null,
    name: null
  }
});

// mock out some pretend user data to work with
// we'll use this as our pretend response from 
// our API call
const mockUser = {
  data: {
    name: 'brittany',
    id: 1
  }
};

describe('userActions', () => {

  afterEach(() => {

    // assert that all API calls have been intercepted
    // and handled appropriately. If there is anything
    // remaining in this array, we done messed up
    expect(fetchMock.calls().unmatched).toEqual([]);

    // our mocked-out store keeps a log of all the actions
    // that have been dispatched so we can check that the
    // appropriate ones are being called. after each test
    // we want to clear this out so we can start fresh
    store.clearActions();

    // start fresh with fetchMock after each test so that we're
    // not intercepting API calls that no longer need to be tested
    fetchMock.restore();
  });



  it('creates SIGN_IN when initiating the login action', () => {

    // mock out what kind of action data we expect to be dispatched
    const expectedAction = { type: 'SIGN_IN', user: mockUser.data };

    // intercept our POST request to /api/users, and automatically
    // return a successful status of 201 with our mockUser data
    fetchMock.post('/api/users', { status: 201, body: mockUser });

    // dispatch our logIn function with a made up email/password
    // because it doesn't matter - the request won't fail because
    // we are intercepting it with fetchMock and telling it to
    // return successfully regardless 
    return store.dispatch(actions.logIn({ email: 'foo', password: 'bar' }))
      .then(() => {

        // get any actions that were created as a result of this dispatch
        // remember our configureMockStore provides this as a utility
        // for us for free, because this is something we would want to test
        let createdActions = store.getActions();

        // ensure that only 1 action was dispatched. It's important to
        // test the length to ensure that no 'side effects' occurred as
        // a result of us logging in
        expect(createdActions.length).toEqual(1);

        // expect the first action created to equal the one we stubbed out
        // earlier -> { type: 'SIGN_IN', user: mockUser.data }
        expect(createdActions[0]).toEqual(expectedAction);
      });
  });

  it('creates SIGN_IN_ERROR when sign in fails', () => {
    // test API endpoint failure
  })
});

