import React, { Component, Fragment } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Row } from "reactstrap";
import { Colxx, Separator } from "components/controls/CustomBootstrap";
import ProblemView from 'components/controls/ProblemView';
import PassView from 'components/controls/PassView';
import LessonView from 'components/controls/LessonView';
import InfiniteScroll from "react-infinite-scroll-component";

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchMoreData = this.fetchMoreData.bind(this);
    
  }

  componentDidMount() {
    const { type, dispatchRequestPosts } = this.props;
    dispatchRequestPosts(type, 0);
  }

  componentDidUpdate(prevProps) {
    
  }

  
  fetchMoreData()  {
    const {type, dispatchRequestPosts} = this.props;
    const page = this.props.items_page;
    const pages = this.props.items_pages;

    if (page < pages) {
      dispatchRequestPosts(type, page + 1);
    }
  };


  // ====================== RENDER
  render() {
    const {items, items_page, type} = this.props;

    const problemList = (
      (type === 'problems') && 
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((data, index) => (
            <div key={index}>
              <ProblemView itemData={data} title={"Problem" + String(index)} />
            </div>
          ))}
        </InfiniteScroll>
      )

    const passList = (
      (type === 'passages') && 
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((data, index) => (
            <div key={index}>
              <PassView itemData={data} title={"Passage" + String(index)} />
            </div>
          ))}
        </InfiniteScroll>
    )

    const lessonList = (
      (type === 'lessons') && 
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((data, index) => (
            <div key={index}>
              <LessonView itemData={data} title={"Lesson" + String(index)} />
            </div>
          ))}
        </InfiniteScroll>
    )

    return (
        <Fragment>
        <Row>
          <Colxx xxs="12">
            {/* <Breadcrumb heading="menu.problems" match={this.props.match} /> */}
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            {problemList}
            {passList}
            {lessonList}
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}

PostsContainer.propTypes = {
  
};

export default PostsContainer;
