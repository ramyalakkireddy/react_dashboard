import {
  GET_REGISTERED_STUDENTS,
  GET_REGISTERED_STUDENTS_SUCCESS,
  GET_REGISTERED_STUDENTS_ERROR,
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR
} from '../actions';

const initialState = {
  studentsList: [],
  courses: [],
  loading: false,
  error: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REGISTERED_STUDENTS:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case GET_REGISTERED_STUDENTS_SUCCESS:
      return {
        ...state,
        studentsList: action.studentsList,
        loading: false
      };
    case GET_REGISTERED_STUDENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case GET_COURSES:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.courses,
        loading: false
      };
    case GET_COURSES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
