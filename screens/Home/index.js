import React, { PureComponent } from 'react';
import Tabs from 'components/Tabs';
import styles from './styles';
import { tabs } from 'config';
import Posts from 'containers/Posts/connector';

export default class Home extends PureComponent {
  // ====================== RENDER
  render() {
    return (
      <div id="home" className="container full-height-min">
        <Tabs tabs={tabs} />
        {/* <Posts type={'lessons'} /> */}
        <style jsx>{styles}</style>
      </div>
    );
  }
}
