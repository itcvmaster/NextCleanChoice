import fetch from 'isomorphic-unfetch';

// ========================= ACTIONS
export const REQUEST_POSTS_START = 'REQUEST_POSTS_START';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';

// ========================= DISPATCHERS
export const dispatchRequestPosts = (type, page) => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_POSTS_START,
      payload: {type, page},
    });
    const res = await fetch(`http://18.237.242.89/api/${type}?page=${page}`).then( res => res.json() );
    dispatch({
      type: REQUEST_POSTS_SUCCESS,
      payload: {type, page, res: res.data, receivedAt: Date.now()},
    });
  };
};
