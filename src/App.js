import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './styles/styles.css';
import Header from'./coponenets/common/header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
    <div className="container-fluid">
      <Header loading={this.props.loading}/>
      {this.props.children}
    </div>
    );
  }
}


function mapStateToProps(state, ownProps){
  return{
  loading:state.numAjaxClassInProgress >0
  };
}
export default connect(mapStateToProps)(App);
