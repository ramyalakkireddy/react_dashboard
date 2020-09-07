import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  GET_REGISTERED_STUDENTS,
  GET_REGISTERED_STUDENTS_SUCCESS,
  GET_REGISTERED_STUDENTS_ERROR,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
  GET_COURSES
} from '../actions';

const baseUrl = 'http://localhost:9000/';

function* fetchStudents(payload) {
  try {
    const endpoint =
      baseUrl
        .concat('students')
    const parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = yield call(fetch, endpoint, parameters);
    const data = yield call([response, 'json']);
    yield put({ type: GET_REGISTERED_STUDENTS_SUCCESS, studentsList: data });
  } catch (e) {
    yield put({ type: GET_REGISTERED_STUDENTS_ERROR, error: e.message });
  }
}

function* fetchCourses(payload) {
  try {
    const endpoint =
      baseUrl
        .concat('courses')
    const parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = yield call(fetch, endpoint, parameters);
    const data = yield call([response, 'json']);
    yield put({ type: GET_COURSES_SUCCESS, courses: data });
  } catch (e) {
    yield put({ type: GET_COURSES_ERROR, error: e.message });
  }
}

function* actionWatcher() {
  yield takeLatest(GET_REGISTERED_STUDENTS, fetchStudents);
  yield takeLatest(GET_COURSES, fetchCourses);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
