import React, { Component } from 'react';
import Link from 'next/link';
import ActiveLink from 'components/ActiveLink';
import styles from './styles';
import LogoDark from 'assets/Logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="header-title">
            <h1>Clean Choice</h1>
          </div>
        </nav>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Header;
