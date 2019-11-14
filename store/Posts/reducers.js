import Immutable from 'immutable';
import { REQUEST_POSTS_START, REQUEST_POSTS_SUCCESS } from './actions';

const initialState = Immutable.fromJS({
    problems: [],
    problems_page: 0,
    problems_pages: 0,      // total page count
    problems_loading: false,

    passages: [],
    passages_page: 0,
    passages_pages: 0,      // total page count
    passages_loading: false,

    lessons: [],
    lessons_page: 0,
    lessons_pages: 0,        // total page count
    lessons_loading: false,
});

export default (state = initialState, action) => {
  if (!action.payload) {
    return state;
  }

  const {type, page, res} = action.payload;
  switch (action.type) {
    case REQUEST_POSTS_START: {
      let newState = state;
      console.log('REQUEST_POSTS_START*************', type);
      newState = newState.set(`${action.payload.type}_loading`, true);
      return newState;
    }
    case REQUEST_POSTS_SUCCESS: {
      let newState = state;

      console.log('REQUEST_POSTS_SUCCESS*************', type, res);
      if (type === 'problems') {
        if (page > 0) {
          newState = newState.merge({ 
            problems_loading: false, 
            problems_page: page, 
            problems_pages: res.pages, 
            problems: [...state.get('problems'), ...res.problems]
          });
        }
        else {
          newState = newState.merge({ 
            problems_loading: false, 
            problems_page: page, 
            problems_pages: res.pages, 
            problems: res.problems 
          });
        }
      }

      if (type === 'passages') {
        if (page > 0) {
          newState = newState.merge({ 
            passages_loading: false, 
            passages_page: page, 
            passages_pages: res.pages, 
            passages: [...state.get('passages'), ...res.passages]
          });
        }
        else {
          newState = newState.merge({ 
            passages_loading: false, 
            passages_page: page, 
            passages_pages: res.pages, 
            passages: res.passages 
          });
        }
      }

      if (type === 'lessons') {
        if (page > 0) {
          newState = newState.merge({ 
            lessons_loading: false, 
            lessons_page: page, 
            lessons_pages: res.pages, 
            lessons: [...state.get('lessons'), ...res.lessons]
          });
        }
        else {
          newState = newState.merge({ 
            lessons_loading: false, 
            lessons_page: page, 
            lessons_pages: res.pages, 
            lessons: res.lessons 
          });
        }
      }

      return newState;
    }
    default:
      return state;
  }
  return state;
}
