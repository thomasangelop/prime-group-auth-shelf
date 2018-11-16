const totalViewReducer = ( state = [], action) => {
    console.log('in totalViewReducer');
    
    switch (action.type) {
        case 'GET_COUNT':
            return action.payload;
        default:
        return state;
    }
}

export default totalViewReducer;