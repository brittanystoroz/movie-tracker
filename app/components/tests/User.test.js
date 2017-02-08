// test auth component

// browserHistory - push http://stackoverflow.com/questions/37831788/unit-testing-react-actions-browserhistory-is-undefined


import React from 'react';
import { shallow } from 'enzyme';
import User from '../user';

describe('<User>', () => {
  it('should work', () => {
    const wrapper = () => shallow(<User />);
    expect(wrapper).not.toThrow();
  });
});