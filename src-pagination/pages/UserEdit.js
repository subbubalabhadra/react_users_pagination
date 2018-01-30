import React from 'react';
import {PageHeader,Form, FormGroup, Col,Button, FormControl, InputGroup, Glyphicon, HelpBlock} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';

 class UserEdit extends React.Component {
 	form_type;
 	constructor(props) {
    super(props);
    this.form_type = (props.intialValues.id > 0) ? 'edit' : 'add';
    this.formSubmit = this.formSubmit.bind(this);
  }
	render () {
		return (
			<div>
			<PageHeader>{'edit' === this.form_type ? 'User edit' : 'User add'} </PageHeader>
			<Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
				<Field name="userName" component={UserEdit.renderUserName}/>
				<Field name="job" component={UserEdit.renderJob}/>
				<FormGroup>
					<Col smOffset={2} sm={8}>
						<Button type="submit" disabled={this.props.invalid || this.props.submitting}>Save User</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
			)
	}

	static renderUserName(props) {
		return (
			<FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
				<Col sm={2}>Username</Col>
				<Col sm={8}>
					<FormControl {...props.input} id="userName" type="text"
						placeholder="Username"/>
						<FormControl.Feedback/>
						<HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
				</Col>
			</FormGroup>
		)
	}

	static renderJob(props) {
		return (
			<FormGroup>
				<Col sm={2}>Job</Col>
				<Col sm={8}>
						<InputGroup>
							<FormControl {...props.input} id="job" type="text"
								placeholder="job"/>
								<InputGroup.Addon>
									<Glyphicon glyph="briefcase"/>
								</InputGroup.Addon>
						</InputGroup>
				</Col>
			</FormGroup>
		)
	}

	formSubmit(values) {
		this.props.dispatch({
			type: 'users.' + this.form_type,
			id: values.id,
			userName: values.userName,
			job: values.userName
		})

		this.props.dispatch(goBack());
	}
}

UserEdit = reduxForm({
	form: 'user_edit',
	validate: function(values) {
		const errors = {};
		if(!values.userName) {
			errors.userName = 'Username is required'
		} 
		return errors;
	}
})(UserEdit);

function mapStateToProps(state, own_props) {
	let form_data = {
  	id:0,
  	userName: '',
  	job: ''
  }
  for(const user of state.users.list) {
  	if(user.id === Number(own_props.params.id)) {
  		form_data = user;;
  		break;
  	}
  }
  console.log(form_data);
  return {
  	intialValues: form_data
  	}
}

export default connect(mapStateToProps) (UserEdit);