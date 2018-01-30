import React from 'react';
import Menu from './Menu';
import UserList from './UserList';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
    


  //   this.state = {
  //     users: users
  //   }

  // }
  render() {

    return (
      <div className="container">
      <div className="row">
      <Menu/>
      </div>
      <div className="row">
       {this.props.children}
       </div>
      </div>
      )
  } 
}

