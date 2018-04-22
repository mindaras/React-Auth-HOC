import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../actions/actionCreators';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign out</button>;
    } else {
      return <button onClick={() => this.props.authenticate(true)}>Sign in</button>;
    }
  }

  render() {
    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item"><Link to="/">Home</Link></li>
          <li className="navigation__item"><Link to="/resources">Resources</Link></li>
          <li className="navigation__item">{this.authButton()}</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    authenticate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
