import React from "react";
import { Redirect } from 'react-router-dom';

export default class RedirectHome extends React.Component {
   
    render() {
      setTimeout(() => {}, 5000);
      return (
        <Redirect to='/' />
      );
    }
  }