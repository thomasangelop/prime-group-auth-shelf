import React, { Component } from 'react';
import { connect } from 'react-redux';

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

	deleteItem = (id) => {
		if (window.confirm('Delete this item from the shelf?')) {
			this.props.dispatch( { type: 'DELETE_ITEM', payload: id } )
		  }
	}

  render() {
		const {items} = this.props
		return (
			<div>
				<ul>
					{items.map(item =>
					<li key={item.id}>
						{item.description}
						<img alt={item.description} width="100" src={item.image_url}/>
						<button onClick={() => {this.deleteItem(item.id)}}>Delete</button>
					</li>)}
				</ul>
				
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
