import React from 'react';
import serialize from 'form-serialize';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin(event) {
    event.preventDefault();
    const params = serialize(event.currentTarget, { hash : true, empty : true });
  }

  render() {
    return(
    <div>
      <form onSubmit={this.handleLogin} id="loginForm">
      <input placeholder="Email" type="email" name="email"/>
      <input placeholder="password" type="password" name="password"/>
      <input type="submit" value="login"/>
      </form>
    </div>
    );
  }
}

export default Login;
