import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class View extends Component {
	getItems = () => {
		this.props.dispatch({
			type: 'FETCH_ITEMS',
		})
	}

	componentDidMount() {
		this.getItems();
	}

  render() {
		return (
			<div>
				{JSON.stringify(this.props.items)}
			</div>
		)
	}
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
	items: state.items
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(View);
