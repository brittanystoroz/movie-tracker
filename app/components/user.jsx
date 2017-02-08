import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { router } = this.props;

    if (nextProps.user.id) {
      router.push('/');
    }
  }

  render() {
    const { logIn } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <input type="text" onChange={e => this.setState({ email: e.currentTarget.value })} placeholder="email" />
        <input type="password" onChange={e => this.setState({ password: e.currentTarget.value })} />
        <button id="login" onClick={e => logIn(this.state)}>Login</button>
      </div>
    )
  }
}
