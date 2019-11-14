import React, { PureComponent } from 'react';
import styles from './styles';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column">
                <h2 className="title is-2">Clean Choice</h2>
                <h4 className="subtitle is-4">All rights reserved @2019</h4>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </footer>
    );
  }
}
