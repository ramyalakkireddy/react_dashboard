export const GET_REGISTERED_STUDENTS = 'GET_REGISTERED_STUDENTS';
export const GET_REGISTERED_STUDENTS_SUCCESS = 'GET_REGISTERED_STUDENTS_SUCCESS';
export const GET_REGISTERED_STUDENTS_ERROR = 'GET_REGISTERED_STUDENTS_ERROR';

export const GET_COURSES = 'GET_COURSES';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_ERROR = 'GET_COURSES_ERROR';

export function getRegisteredStudents() {
  return {
    type: GET_REGISTERED_STUDENTS,
  };
}

export function getCourses() {
  return {
    type: GET_COURSES
  };
}
