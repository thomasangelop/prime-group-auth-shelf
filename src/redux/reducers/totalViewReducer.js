const totalViewReducer = ( state = [], action) => {
    switch (action.type) {
        case 'GET_COUNT':
            return action.payload;
        default:
        return state;
    }
}

export default totalViewReducer;