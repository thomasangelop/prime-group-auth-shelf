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

function* deleteItem(action) {
  try {
    yield call( axios.delete, `/api/shelf/${action.payload}`)
    yield put( { type: 'FETCH_ITEMS' } );
}
catch (error) {
    alert('error deleting item from database', error);
  }
}

function* itemSaga() {
  yield takeEvery('FETCH_ITEMS', fetchItems);
  yield takeEvery('DELETE_ITEM', deleteItem);
}

export default itemSaga;