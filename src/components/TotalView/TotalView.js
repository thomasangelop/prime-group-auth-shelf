import React, { Component } from 'react';
import { connect } from 'react-redux';

// this.props.dispatch({type:'GET_COUNT_SAGA'})

class TotalView extends Component{

    componentDidMount() {
        console.log('inside GET_COUNT_SAGA');
        
        const action = {type:'GET_COUNT_SAGA'};
        this.props.dispatch(action);
    }

    render() {
        return(
            <div>
                <div>
                    <h2>Total View Page</h2>
                </div>
                {/* {JSON.stringify(this.props.reduxState.totalViewReducer)} */}
                <table>
                    <thead>
                        <tr><th>USER</th><th>CONTRIBUTIONS</th></tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.totalViewReducer.map(contributionCount => (
                            <tr key={contributionCount.username}>
                                <td>{contributionCount.username}</td>
                                <td>{contributionCount.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(TotalView);