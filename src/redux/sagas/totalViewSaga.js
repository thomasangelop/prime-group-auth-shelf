import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* totalViewSaga(action){
    console.log('inside total view saga')
    try{
        let response = yield call(axios.get, '/api/shelf/count');
        yield put({type: 'GET_COUNT', payload: response.data});
    }
    catch(error){
        console.log('error in our totalViewSaga', error);
    }
    
}

function* getTotalSaga(){
    
    yield takeEvery('GET_COUNT_SAGA', totalViewSaga);
}

export default getTotalSaga;