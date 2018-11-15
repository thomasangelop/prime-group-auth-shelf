import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEMS" actions
function* fetchItems() {
  try {
    const response = yield call(axios.get, 'api/shelf');
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Items get request failed', error);
  }
}

function* itemSaga() {
  yield takeEvery('FETCH_ITEMS', fetchItems);
}

export default itemSaga;