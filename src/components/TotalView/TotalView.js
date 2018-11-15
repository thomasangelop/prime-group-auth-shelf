import React, { Component } from 'react';
import { connect } from 'react-redux';

this.props.dispatch({type:'GET_COUNT_SAGA'})
class TotalView extends Component{
    render() {
        return(
            <div>
                <div>
                    <h2>Total View Page</h2>
                </div>
                <thead>
                    <tr><th>USER</th><th>CONTRIBUTIONS</th></tr>
                </thead>
                <tbody>
                    {this.props.reduxState.totalViewReducer.map(contributionCount => (
                        <tr key={contributionCount.username}>
                            <td>{this.props.contributionCount.username}</td>
                            <td>{this.props.contributionCount.count}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(TotalView);