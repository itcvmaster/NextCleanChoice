import { connect } from 'react-redux';
import { dispatchRequestPosts } from 'store/Posts/actions';
import Component from './component';
import Immutable from 'immutable';

const mapStateToProps = (state, props) => {
  const obj = state.get('Posts');
  console.log('mapStateToProps ', props);
  return {
    items: obj.get(`${props.type}`),
    items_page: obj.get(`${props.type}_page`),
    items_pages: obj.get(`${props.type}_pages`),
    items_loading: obj.get(`${props.type}_loading`)
  };
};

const dispatchers = {
  dispatchRequestPosts,
};

export default connect(
  mapStateToProps,
  dispatchers
)(Component);
