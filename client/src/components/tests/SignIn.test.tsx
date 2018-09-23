import * as React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../SignIn';

describe('Password input', () => {

   it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<SignIn />);
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'pass'}});

    expect(wrapper.state('password')).toEqual('pass');
   })
  })

  describe('Username input', () => {

   it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<SignIn />);
    wrapper.find('#username').simulate('change', {target: {name: 'username', value: 'kjarmon'}});

    expect(wrapper.state('username')).toEqual('kjarmon');
   })
  })