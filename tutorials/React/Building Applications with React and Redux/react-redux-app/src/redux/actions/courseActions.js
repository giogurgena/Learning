import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses: courses,
  };
}

export function createCoursesSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    courses: course,
  };
}

export function updateCoursesSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    courses: course,
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCoursesSuccess(savedCourse))
          : dispatch(createCoursesSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
