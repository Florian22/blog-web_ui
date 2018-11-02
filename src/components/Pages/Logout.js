import React from "react";
import { Redirect } from 'react-router-dom';
//Redux
import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";


const mapStatetoProps = (state) => {
    return state;
  }

class Logout extends React.Component {

componentWillMount() {
    this.props.signOut();
    }    

render() {
    return (
      <Redirect to={{pathname: '/',}}/>
    );
  }
}

export default connect(mapStatetoProps,actionCreators)(Logout);