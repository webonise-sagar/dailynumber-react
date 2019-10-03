import React from 'react';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> SignUp </Link>
      </div>
    );
  }
}

export default Dashboard;
