import React from 'react';
import { Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class UserListElement extends React.Component {
  constructor(props) {
    super(props);
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }
  
	render () {
		const user = this.props.user;
		return (
			<tr>
        <td> #{ user.id } </td>
        <td> { user.userName } </td>
        <td> { user.job } </td>
        <td>
        <Link href={ '/user-edit/' + user.id }> 
        <Button bsSize="xsmall">Edit <Glyphicon glyph="edit"/> </Button> </Link>
        </td>
        <td>
        <Button bsSize="xsmall" data-id={ user.id } data-username={user.userName}
        onClick={this.modalDeleteShow}>
           Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
			)
	}
  modalDeleteShow(event) {
    const user_id = Number(event.target.dataset.id);
    const userName = event.target.dataset.username;
    this.props.dispatch({
      type:'users.modalDeleteShow',
      id: user_id,
      userName: userName
    })
  }
  
}

UserListElement.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default connect() (UserListElement);