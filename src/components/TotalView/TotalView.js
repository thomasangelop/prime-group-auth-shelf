import React, { Component } from 'react';
import { connect } from 'react-redux';

this.props.dispatch({type:'GET_COUNT_SAGA'})
class TotalView extends Component{
    render() {
        return(
            <div>
                <h2>TotalView Page</h2>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(TotalView);