import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

async function apiFetchUser (...args) {
  return {
    id: 1,
    username: 'Admin',
    email: 'admin@gmail.com',
    name: 'Alexandr'
  }
}

function * fetchUser (action) {
  try {
    const user = yield call(apiFetchUser, action.payload.id)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', payload: e.message })
  }
}

function * mySaga () {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga
