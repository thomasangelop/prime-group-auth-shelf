import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



const emptyItem = {
    description: '',
    image_url: ''
  }
  
  class Add extends Component {
  
    state = emptyItem
  
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
            <form onSubmit={this.onSubmit}>
              <label>Description:</label>
              <input onChange={this.handleNameChange} value={this.state.description} name="description"/>
              <br />
              <label>Image URL: (full link from the internet only)</label>
              <input onChange={this.handleNameChange} value={this.state.url} name="image_url"/>
              <br />
              <button type="submit">Add Item to Shelf</button>
            </form>
      );
    }
  }
  
  
  export default connect()(Add);
  