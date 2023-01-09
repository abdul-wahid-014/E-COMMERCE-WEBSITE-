import { put, takeEvery } from 'redux-saga/effects'

function* fetchData() {
   try {
      const response = yield fetch('https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2');
      const data =yield response.json();
      yield put({type: "SET_PRODUCT_LIST", payload: data});
   } catch (e) {
    console.log(e)
   }
}


function* saga() {
    yield takeEvery("PRODUCT_LIST", fetchData);

}

export default saga;