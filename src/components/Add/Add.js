import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });


const emptyItem = {
    description: '',
    image_url: '',
    person_id: 0
  }
  
  class Add extends Component {
  
    state = emptyItem

    componentDidMount = () => {
        this.setState({
            ...this.state,
            person_id: this.props.reduxState.user.id
          })
    }
    person = this.props.reduxState.user.id;
  
    onSubmit = ( event ) => {
      event.preventDefault();
      console.log(this.state);
  
      axios({
        method: 'POST',
        url: '/api/shelf',
        data: { newItem: this.state }
      })
        .then( (response) => {
          this.clearInputs();
        })
        .catch( (error) => {
          alert('Bad stuff happened:', error);
        })
    }
  
    clearInputs = () => {
      this.setState(emptyItem);
    }
  
    handleNameChange = (event) => {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return (
          <div>
            {/* <p>{JSON.stringify(this.state)}</p>
            <p>{JSON.stringify(this.props.reduxState.user.id)}</p> */}
            <form onSubmit={this.onSubmit}>
              <label>Description:</label>
              <input onChange={this.handleNameChange} value={this.state.description} name="description"/>
              <br />
              <label>Image URL: (full link from the internet only)</label>
              <input onChange={this.handleNameChange} value={this.state.image_url} name="image_url"/>
              <br />
              <button type="submit">Add Item to Shelf</button>
            </form>
        </div>
      );
    }
  }
  
  export default connect(mapReduxStateToProps)(Add);
  